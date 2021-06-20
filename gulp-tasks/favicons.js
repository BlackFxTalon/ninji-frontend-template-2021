"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import yargs from "yargs";
import favicons from "gulp-favicons";
import debug from "gulp-debug";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("favicons", () => {
    return gulp
        .src(paths.favicons.src)
        .pipe(
            gulpif(
                production,
                favicons({
                    icons: {
                        appleIcon: true,
                        favicons: true,
                        online: true,
                        appleStartup: true,
                        android: true,
                        firefox: true,
                        yandex: true,
                        windows: true,
                        coast: true,
                    },
                }),
            )
        )
        .pipe(gulp.dest(paths.favicons.dist))
        .pipe(
            debug({
                title: "Favicons",
            }),
        );
});
