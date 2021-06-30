"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import avif from "gulp-avif";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("avif", () => {
    return gulp
        .src(paths.avif.src)
        .pipe(
            gulpif(
                production,
                avif({
                    lossless: true
                })
            )
        )
        .pipe(gulp.dest(paths.avif.dist))
        .pipe(
            debug({
                title: "Images",
            })
        )
        .on("end", browsersync.reload);
});