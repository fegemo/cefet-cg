var pkg = require('./package.json'),
    fs = require('fs'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    rimraf = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    replace = require('gulp-replace'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    through = require('through'),
    opn = require('opn'),
    ghpages = require('gh-pages'),
    path = require('path'),
    merge = require('merge-stream'),
    isDist = process.argv.indexOf('serve') === -1;

gulp.task('js', ['clean:js'], function() {
  return gulp.src('scripts/main.js')
    .pipe(isDist ? through() : plumber())
    .pipe(browserify({ transform: ['debowerify'], debug: !isDist }))
    .pipe(isDist ? uglify() : through())
    .pipe(rename('build.js'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('html', ['clean:html'], function() {
  return gulp.src('html/index.html')
    .pipe(isDist ? through() : plumber())
    .pipe(replace('{path-to-root}', './'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('md', ['clean:md'], function() {
  var tasks = [];
  tasks.push(gulp.src(['README.md'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload()));
  tasks.push(gulp.src(['classes/**/*.md'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/classes'))
    .pipe(connect.reload()));
  tasks.push(gulp.src(['assignments/**/*.md'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/assignments'))
    .pipe(connect.reload()));
  return merge(tasks);
});

gulp.task('css', ['clean:css'], function() {
  return gulp.src('styles/main.styl')
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({
      // Allow CSS to be imported from node_modules and bower_components
      'include css': true,
      'paths': ['./node_modules', './bower_components']
    }))
    .pipe(autoprefixer('last 2 versions', { map: false }))
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('images', ['clean:images'], function() {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());
});

gulp.task('attachments', ['clean:attachments'], function() {
  return gulp.src('attachments/**/*')
    .pipe(gulp.dest('dist/attachments'))
    .pipe(connect.reload());
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(rimraf());
});

gulp.task('clean:html', function() {
  return gulp.src('dist/index.html')
    .pipe(rimraf());
});

gulp.task('clean:md', function() {
  return gulp.src('dist/**/*.md')
    .pipe(rimraf());
});

gulp.task('clean:js', function() {
  return gulp.src('dist/build/build.js')
    .pipe(rimraf());
});

gulp.task('clean:css', function() {
  return gulp.src('dist/build/build.css')
    .pipe(rimraf());
});

gulp.task('clean:images', function() {
  return gulp.src('dist/images')
    .pipe(rimraf());
});

gulp.task('clean:attachments', function() {
  return gulp.src('dist/attachments')
    .pipe(rimraf());
});


function getFolders(cwd, dir) {
  var targetDirectory = path.join(cwd, dir);
  return fs.readdirSync(targetDirectory)
    .filter(function(file) {
      return fs.statSync(path.join(targetDirectory, file)).isDirectory();
    })
    .map(function(filePath) {
      return path.join(dir, filePath);
    });
}

gulp.task('cefet-files', ['js', 'html', 'md', 'css', 'images', 'attachments'], function() {
  var folders = getFolders('.', 'classes').concat(getFolders('.', 'assignments')),
      tasks = folders.map(function(folder) {
        var t = [];
        t.push(gulp.src(['html/index.html'])
          .pipe(replace('{path-to-root}', '../..'))
          .pipe(gulp.dest(path.join('dist', folder))));
        return merge(t);
      });
  return merge(tasks);
});

gulp.task('connect', ['build'], function(done) {
  connect.server({
    root: ['dist'],
    port: 8081,
    livereload: true
  });

  opn('http://localhost:8081', done);
});

gulp.task('watch', function() {
  gulp.watch('html/**/*.html', ['html']);
  gulp.watch('classes/**/*.md', ['md']);
  gulp.watch('assignments/**/*.md', ['md']);
  gulp.watch('README.md', ['md']);
  gulp.watch('styles/**/*.styl', ['css']);
  gulp.watch('images/**/*', ['images']);
  gulp.watch('scripts/**/*.js', ['js']);
});

gulp.task('deploy', ['build'], function(done) {
  ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log }, done);
});

gulp.task('build', ['cefet-files']);
gulp.task('serve', ['connect', 'watch']);
gulp.task('default', ['build']);
