const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

function sassTask() {
  return gulp.src('./sass/main.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./css'))
             .pipe(browserSync.stream())
}

function browserSyncTask() {
  sassTask()
  browserSync.init({
    server: './'
  })
  gulp.watch('./sass/*.scss', sassTask)
  gulp.watch('./*.html').on('change', browserSync.reload)
}

function defaultTask() {
  browserSyncTask()
}

exports.default = defaultTask