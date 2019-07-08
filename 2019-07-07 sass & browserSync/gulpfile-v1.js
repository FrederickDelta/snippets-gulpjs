const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('sass', () => {
  return gulp.src('./sass/main.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./css'))
             .pipe(browserSync.stream())
})

gulp.task('browserSync', gulp.series(['sass'], () => {
  browserSync.init({
    server: './'
  })
  gulp.watch('./sass/*.scss', gulp.series(['sass']))
  gulp.watch('./*.html').on('change', browserSync.reload)
}))

gulp.task('default', gulp.series(['browserSync']))