import { src, dest, series, parallel, watch } from 'gulp';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import stylus from 'gulp-stylus';
import buffer from 'vinyl-buffer';
import replace from 'gulp-replace';
import changed from 'gulp-changed';
import sourcemaps from 'gulp-sourcemaps';
import preprocess from 'gulp-preprocess';
import source from 'vinyl-source-stream';
import autoprefixer from 'gulp-autoprefixer';
import gulpIf from 'gulp-if';

import fs from 'fs';
import path from 'path';
import del from 'del';
import ghpages from 'gh-pages';
import merge from 'ordered-read-streams';
import browserify from 'browserify';
import browserSyncModule from 'browser-sync';
const browserSync = browserSyncModule.create();

const isDist = process.argv.indexOf('dev') === -1;

async function clean() {
  return del(['dist']);
}

function js() {
  return browserify({ entries: 'scripts/main.js', debug: !isDist })
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpIf(isDist, terser()))
    .on('error', console.log)
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist/build'));
}

function jsClasses() {
  const destination = 'dist/scripts/classes';
  return src(['scripts/classes/**/*.js'])
    .pipe(changed(destination))
    .pipe(dest(destination));
}

function html() {
  return src('html/index.html')
    .pipe(
      preprocess({
        context: {
          NODE_ENV: isDist ? 'production' : 'development',
          DEBUG: true
        }
      })
    )
    .pipe(replace('{path-to-root}', '.'))
    .pipe(dest('dist'));
}

function md() {
  const tasks = [];

  tasks.push(
    src('README.md')
      .pipe(changed('dist'))
      .pipe(dest('dist')));

  tasks.push(
    src('classes/**/*.md')
      .pipe(changed('dist/classes'))
      .pipe(dest('dist/classes'))
  );

  return merge(tasks);
}

function css() {
  return src('styles/main.styl')
    .pipe(changed('dist/build'))
    .pipe(
      stylus({
        'include css': true,
        paths: ['./node_modules']
      })
    )
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
    .pipe(gulpIf(isDist, csso()))
    .pipe(rename('build.css'))
    .pipe(dest('dist/build'));
}

function cssClasses() {
  const destination = 'dist/styles/classes';
  return src(['styles/classes/**/*.css'])
    .pipe(changed(destination))
    .pipe(dest(destination));
}

function images() {
  // need to copy binary images separately from SVGs as of gulp 5, to prevent corrupting the files
  return src(['images/**/*', '!images/**/*.svg'], { encoding: false })
    .pipe(src('images/**/*.svg'))
    .pipe(changed('dist/images'))
    .pipe(dest('dist/images'));
}

function samples() {
  // need to copy binary files with encoding: false to prevent corruption
  const destination = 'dist/samples';
  return src('samples/**/images/**/*', { encoding: false })
    .pipe(src(['samples/**/*', '!samples/**/images/**/*']))
    .pipe(changed(destination))
    .pipe(dest(destination));
}

function copierTaskGenerator(taskName, source, destination) {
  const name = Symbol(taskName);
  const obj = {
    [name]: () =>
      src(source)
        .pipe(changed(destination))
        .pipe(dest(destination))
  };

  return obj[name];
}

const attachments = copierTaskGenerator('attachments', 'attachments/**/*', 'dist/attachments');
const videos = copierTaskGenerator('videos', 'videos/**/*', 'dist/videos');
const audios = copierTaskGenerator('audios', 'audios/**/*', 'dist/audios');
const favicon = copierTaskGenerator('favicon', 'favicon/**/*', 'dist/favicon');
const classesStuff = copierTaskGenerator('classes-stuff', ['classes/**/*', '!classes/**/*.md'], 'dist/classes');

function getFolders(cwd, dir) {
  const targetDirectory = path.join(cwd, dir);
  return fs
    .readdirSync(targetDirectory)
    .filter(file => fs.statSync(path.join(targetDirectory, file)).isDirectory())
    .map(filePath => path.join(dir, filePath));
}

async function buildClasses() {
  const folders = getFolders('.', 'classes');
  // helper to await a gulp stream completion
  const waitFor = (stream) =>
    new Promise((resolve, reject) => {
      stream.on('error', reject);
      stream.on('end', resolve);
      stream.on('finish', resolve);
    });

  for (const folder of folders) {
    const htmlStream = src(['html/index.html'])
      .pipe(
        preprocess({
          context: {
            NODE_ENV: isDist ? 'production' : 'development',
            DEBUG: true
          }
        })
      )
      .pipe(replace('{path-to-root}', '../..'))
      .pipe(dest(path.join('dist', folder)));

    await waitFor(htmlStream);

    const katexCandidates = [
      path.join('node_modules', 'bespoke-math', 'node_modules', 'katex-build', 'fonts'),
      path.join('node_modules', 'katex', 'build', 'fonts'),
      path.join('node_modules', 'katex', 'dist', 'fonts'),
      path.join('node_modules', 'katex', 'fonts')
    ];

    const katexSrc = katexCandidates.find((p) => fs.existsSync(p));
    if (katexSrc) {
      const fontsStream = src([path.join(katexSrc, '**', '*')])
        .pipe(dest(path.join('dist', folder, 'fonts')));
      await waitFor(fontsStream);
    } else {
      console.warn('katex fonts not found in node_modules; skipping font copy for', folder);
    }
  }

  return Promise.resolve();
}

function reload(done) {
  browserSync.reload();
  done();
}

function devServer() {
  const port = 8080;

  browserSync.init({ server: 'dist', port, open: true, notify: false });

  watch('scripts/*.js', series(js, reload));
  watch('videos/**/*', series(videos, reload));
  watch('audios/**/*', series(audios, reload));
  watch('images/**/*', series(images, reload));
  watch('samples/**/*', series(samples, reload));
  watch('html/**/*.html', series(html, reload));
  watch('styles/**/*.styl', series(css, reload));
  watch('attachments/*', series(attachments, reload));
  watch('scripts/classes/*.js', series(jsClasses, reload));
  watch('styles/classes/*.css', series(cssClasses, reload));
  watch(['README.md', 'classes/**/*.md'], series(md, reload));
  watch(['classes/**/*', '!classes/**/*.md'], series(classesStuff, reload));

  return Promise.resolve();
}

function deploy(done) {
  ghpages.publish(path.join(process.cwd(), 'dist'), done);
}

export { clean };
export const build = series(
  parallel(js, md, css, html, images, audios, videos, favicon, samples, jsClasses, cssClasses, attachments, classesStuff),
  buildClasses
);
export const dev = series(build, devServer);
export { deploy };
export {images}