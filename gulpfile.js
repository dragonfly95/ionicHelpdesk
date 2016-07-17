var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');


var babel = require('gulp-babel');
var cached = require('gulp-cached');
var remember = require('gulp-remember');


var paths = {
  sass: [
    './scss/**/*.scss',
    './www/states/**/*.scss'
  ],
  js:[
    './www/**/*.js',
    '!./www/js/app.js',
    '!./www/js/compiled.js',
    '!./www/lib/**/*.js'
  ],
  lib: [
    './www/lib/jquery/dist/jquery.js',
    './www/lib/ionic/js/ionic.bundle.js',
    './www/lib/angular-resource/angular-resource.js',
    './www/lib/ngstorage/ngStorage.js'
  ]
};

gulp.task('default', ['sass','js']);

gulp.task('js', function(done) {
  gulp.src(paths.js)
    .pipe(cached('app'))
    .pipe(babel({
      presets:['es2015']
    }))
    .pipe(remember('app'))
    .pipe(concat('compiled.js'))
    .pipe(gulp.dest('./www/js'))
    .on('end', done);
});

gulp.task('lib', function(done){
  gulp.src(paths.lib)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./www/lib'))
    .on('end', done);
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss') 
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});