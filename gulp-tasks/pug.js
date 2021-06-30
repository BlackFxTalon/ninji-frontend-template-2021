"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import htmlValidator from "gulp-w3c-html-validator";
import browsersync from "browser-sync";


gulp.task("pug", () => {
    return gulp
        .src(paths.pug.src)
        .pipe(
            pug({
                pretty: true,
            }),
        )
        .pipe(htmlValidator())
        .pipe(gulp.dest(paths.pug.dist))
        .pipe(browsersync.stream());
});
