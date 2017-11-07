var gulp = require('gulp')
var less = require('gulp-less')
var sass = require('gulp-sass')
var css = require('gulp-minify-css')
var watch = require('gulp-watch')
var uglify = require('gulp-uglify')
var htmlmin = require('gulp-htmlmin')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var clean = require('gulp-clean')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('minLess', function() {
  gulp.src('src/less/*.less')
  .pipe(watch('src/less/*.less'))
  .pipe(less())
  .pipe(gulp.dest('src/css'))
})

gulp.task('minSass', function() {
  gulp.src('src/scss/*.scss')
  .pipe(watch('src/scss/*.scss'))
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
})

gulp.task('minCss', function() {
  gulp.src('src/css/*.css')
  .pipe(css())
  .pipe(gulp.dest('dist/css'))
})

gulp.task('prefix', function() {
  gulp.src('src/css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'Android >= 4.0'],
    cascade: false // 是否美化css
  }))
  .pipe(gulp.dest('dist/css'))
})

gulp.task('minJs', function() {
  gulp.src(['src/js/*.js'])
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
})

gulp.task('minHtml', function() {
  var options = {
    removeComments: true,   // 清除HTML注释
    collapseWhitespace: true,  // 压缩HTML
    collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,   //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,   // removeStyleLinkTypeAttributes
    minifyJS: true,     //压缩页面JS
    minifyCSS: true     // 压缩页面CSS
  }

  gulp.src('src/html/*.html')
  .pipe(htmlmin(options))
  .pipe(gulp.dest('dist/html'))
})

gulp.task('clean', function() {
  return gulp.src('./dist', {
    read: false
  }).pipe(clean())
})


gulp.task('default', ['minLess', 'minSass'])
