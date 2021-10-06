const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const fileinclude = require('gulp-file-include');

//webPack
let webConfig = {
    mode: 'development',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};


gulp.task('fileinclude', function() {
    gulp.src(['src/html/*.html', '!src/html/components'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('src'))
        .pipe(browserSync.stream());
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

function scripts() {
    return gulp.src('./src/js/script.js')
      .pipe(webpack(webConfig))
      .pipe(gulp.dest('./src/js'))
      .pipe(browserSync.stream());
}

gulp.task('scripts', scripts);

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min",
              }))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest("src/css"))
            .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
    gulp.watch("src/*.html").on("change", browserSync.reload);
    // gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
    gulp.watch(['src/js/**/*.js', '!src/js/bundle.js']).on("change", scripts);
    gulp.watch(['src/html/**/*.html']).on("change", gulp.parallel("fileinclude"));
});

gulp.task('default', gulp.parallel('watch', 'fileinclude', 'browser-sync', 'styles', 'scripts'));