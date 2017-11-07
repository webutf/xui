var gulp = require('gulp')
var less = require('gulp-less')
var sass = require('gulp-sass')
var minifyCss = require('gulp-minify-css')
var watch = require('gulp-watch')
var uglify = require('gulp-uglify')
var htmlmin = require('gulp-htmlmin')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var clean = require('gulp-clean')
var del = require('del')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var pngquant = require('imagemin-pngquant')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('minLess', function() {
  gulp.src('src/css/**/*.less')
  .pipe(less())
  .pipe(concat('index.css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'Android >= 4.0'],
    cascade: false // 是否美化css
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'))
})

gulp.task('minSass', function() {
  gulp.src('src/css/**/*.scss')
  .pipe(sass())
  .pipe(concat('index.css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'Android >= 4.0'],
    cascade: false // 是否美化css
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'))
})

gulp.task('minCss', function() {
  gulp.src('src/css/**/*.css')
  .pipe(concat('index.css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'Android >= 4.0'],
    cascade: false // 是否美化css
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'))
})

gulp.task('minifyjs', function() {
  gulp.src(['src/js/**/*.js'])
  .pipe(concat('index.js'))
  .pipe(rename({suffix: '.min'}))
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

  gulp.src('src/**/*.html')
  .pipe(htmlmin(options))
  .pipe(gulp.dest('dist'))
})

gulp.task('clean', function() {
  del(['./dist/*'])
  // return gulp.src('./dist', {
  //   read: false
  // }).pipe(clean())
})

gulp.task('minImg', function() {
  gulp.src('src/img/*.{png,jpg,gif,ico}')
  .pipe(cache(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
  })))
  .pipe(gulp.dest('dist/img'));
})

gulp.task('watch', ['minLess', 'minSass', 'minCss', 'minifyjs', 'minHtml', 'minImg'], function () {
	gulp.watch(['new/css/*.less','new/*.html', 'new/js/*.js','new/img/**/*'], ['less', 'js', 'css', 'htmlmin','images']);
})
