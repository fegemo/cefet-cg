const { src, dest, series, parallel, watch } = require("gulp"),
  csso = require("gulp-csso"),
  rename = require("gulp-rename"),
  terser = require("gulp-terser"),
  stylus = require("gulp-stylus"),
  buffer = require("vinyl-buffer"),
  replace = require("gulp-replace"),
  changed = require("gulp-changed"),
  webserver = require("gulp-webserver"),
  sourcemaps = require("gulp-sourcemaps"),
  preprocess = require("gulp-preprocess"),
  source = require("vinyl-source-stream"),
  autoprefixer = require("gulp-autoprefixer");

const fs = require("fs"),
  path = require("path"),
  del = require("delete"),
  through = require("through"),
  ghpages = require("gh-pages"),
  merge = require("merge-stream"),
  browserify = require("browserify");

const isDist = process.argv.indexOf("dev") === -1;

function clean(cb) {
  del("dist", cb);
}

function js() {
  return browserify({
    entries: "scripts/main.js",
    debug: !isDist
  })
    .bundle()
    .pipe(source("build.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(isDist ? terser() : through())
    .on("error", console.log)
    .pipe(sourcemaps.write("./"))
    .pipe(dest("dist/build"));
}

function jsClasses() {
  const destination = "dist/scripts/classes";
  return src(["scripts/classes/**/*.js"])
    .pipe(changed(destination))
    .pipe(dest(destination));
}

function html() {
  return src("html/index.html")
    .pipe(
      preprocess({
        context: {
          NODE_ENV: isDist ? "production" : "development",
          DEBUG: true
        }
      })
    )
    .pipe(replace("{path-to-root}", "."))
    .pipe(dest("dist"));
}

function md() {
  const tasks = [];

  tasks.push(
    src("README.md")
      .pipe(changed("dist"))
      .pipe(dest("dist"))
  );

  tasks.push(
    src("classes/**/*.md")
      .pipe(changed("dist/classes"))
      .pipe(dest("dist/classes"))
  );

  return merge(tasks);
}

function css() {
  return src("styles/main.styl")
    .pipe(changed("dist/build"))
    .pipe(
      stylus({
        "include css": true,
        paths: ["./node_modules"]
      })
    )
    .pipe(autoprefixer("last 2 versions", { map: false }))
    .pipe(isDist ? csso() : through())
    .pipe(rename("build.css"))
    .pipe(dest("dist/build"));
}

function cssClasses() {
  const destination = "dist/styles/classes";
  return src(["styles/classes/**/*.css"])
    .pipe(changed(destination))
    .pipe(dest(destination));
}

function copierTaskGenerator(taskName, folder) {
  const source = `${folder}/**/*`;
  const destination = `dist/${folder}`;

  const name = Symbol(taskName);
  const obj = {
    [name]: () =>
      src(source)
        .pipe(changed(destination))
        .pipe(dest(destination))
  };

  return obj[name];
}

const images = copierTaskGenerator("images/**/*", "dist/images");
const attachments = copierTaskGenerator("attachments/**/*", "dist/attachments");
const samples = copierTaskGenerator("samples/**/*", "dist/samples");
const videos = copierTaskGenerator("videos/**/*", "dist/videos");
const audios = copierTaskGenerator("audios/**/*", "dist/audios");
const favicon = copierTaskGenerator("favicon/**/*", "dist/favicon");
const classesStuff = copierTaskGenerator(["classes/**/*", "!classes/**/*.md"], "dist/classes");

function getFolders(cwd, dir) {
  const targetDirectory = path.join(cwd, dir);
  return fs
    .readdirSync(targetDirectory)
    .filter(file => fs.statSync(path.join(targetDirectory, file)).isDirectory())
    .map(filePath => path.join(dir, filePath));
}

function build() {
  const folders = getFolders(".", "classes");
  const tasks = folders.map(folder => {
    const t = [];
    t.push(
      src(["html/index.html"])
        .pipe(
          preprocess({
            context: {
              NODE_ENV: isDist ? "production" : "development",
              DEBUG: true
            }
          })
        )
        .pipe(replace("{path-to-root}", "../.."))
        .pipe(dest(path.join("dist", folder)))
    );

    t.push(
      src([
        "node_modules/bespoke-math/node_modules/katex-build/fonts/**/*"
      ]).pipe(dest(path.join("dist", folder, "fonts")))
    );

    return merge(t);
  });

  return merge(tasks);
}

function dev() {
  const port = 8080;

  watch("scripts/*.js", js);
  watch("videos/**/*", videos);
  watch("audios/**/*", audios);
  watch("images/**/*", images);
  watch("samples/**/*", samples);
  watch("html/**/*.html", html);
  watch("styles/**/*.styl", css);
  watch("attachments/*", attachments);
  watch("scripts/classes/*.js", jsClasses);
  watch("styles/classes/*.css", cssClasses);
  watch(["README.md", "classes/**/*.md"], md);
  watch(["classes/**/*", "!classes/**/*.md"], classesStuff);

  return src("dist").pipe(
    webserver({
      livereload: true,
      open: true,
      port
    })
  );
}

function deploy(done) {
  ghpages.publish(path.join(__dirname, "dist"), done);
}

exports.clean = clean;
exports.build = series(
  parallel(
    js,
    md,
    css,
    html,
    images,
    audios,
    videos,
    favicon,
    samples,
    jsClasses,
    cssClasses,
    attachments,
    classesStuff
  ),
  build
);
exports.dev = series(exports.build, dev);
exports.deploy = deploy;
