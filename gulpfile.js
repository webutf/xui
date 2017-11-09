var gulp = require('gulp')
var less = require('gulp-less')
var sass = require('gulp-sass')
var minifyCss = require('gulp-minify-css')
var watch = require('gulp-watch')
var uglify = require('gulp-uglify')
var htmlmin = require('gulp-htmlmin')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var del = require('del')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var rev = require('gulp-rev')
var plumber = require('gulp-plumber')
var pngquant = require('imagemin-pngquant')
var autoprefixer = require('gulp-autoprefixer')

// gulp.task('minLess', function() {
//   gulp.src('src/css/**/*.less')
//   .pipe(plumber())
//   .pipe(less())
//   .pipe(concat('index.css'))
//   .pipe(autoprefixer({
//     browsers: ['last 2 versions', 'Android >= 4.2'],
//     cascade: false
//   }))
//   .pipe(rename({suffix: '.min'}))
//   .pipe(minifyCss())
//   .pipe(gulp.dest('dist/css'))
// })

gulp.task('minSass', function() {
  gulp.src('src/scss/index.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(concat('index.css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'Android >= 4.2'],
    cascade: false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifyCss())
  .pipe(gulp.dest('src/assets'))
  .pipe(gulp.dest('dist/assets'))
})

// gulp.task('minCss', function() {
//   gulp.src('src/css/**/*.css')
//   .pipe(plumber())
//   .pipe(concat('index.css'))
//   .pipe(autoprefixer({
//     browsers: ['last 2 versions', 'Android >= 4.0'],
//     cascade: false // 是否美化css
//   }))
//   .pipe(rename({suffix: '.min'}))
//   .pipe(minifyCss())
//   .pipe(gulp.dest('dist/css'))
// })

gulp.task('minifyjs', function() {
  gulp.src(['src/js/**/*.js'])
  .pipe(plumber())
  .pipe(concat('index.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('src/assets'))
  .pipe(gulp.dest('dist/assets'))
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
  gulp.src('src/**/*.html')
  .pipe(plumber())
  .pipe(htmlmin(options))
  .pipe(gulp.dest('dist'))
})

gulp.task('clean', function() {
  del(['dist/*', 'src/css/*'])
})

gulp.task('minImg', function () {
  gulp.src('src/img/*')
  .pipe(gulp.dest('dist/img'))
})

gulp.task('iconfont', function() {
  gulp.src('src/fonts/*')
  .pipe(gulp.dest('dist/font'))
})

gulp.task('watch',['minSass', 'minifyjs'], function () {
	gulp.watch(['src/scss/**/*.scss', 'src/js/**/*.js'],
  ['minSass', 'minifyjs'])
})

gulp.task('dist', ['minSass', 'minifyjs', 'minHtml', 'minImg', 'iconfont'])
