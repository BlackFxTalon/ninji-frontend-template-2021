"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        pug: {
            src: ["./src/pug/pages/*.pug"],
            dist: "./build/",
            watch: ["./src/components/**/*.pug", "./src/pug/**/*.pug"],
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./build/styles/",
            watch: [
                "./src/components/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}",
            ],
        },
        scripts: {
            src: "./src/js/main.js",
            dist: "./build/js/",
            watch: ["./src/components/**/*.js", "./src/js/**/*.js"],
        },
        images: {
            src: [
                "./src/resources/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/resources/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            ],
            dist: "./build/img/",
            watch: "./src/resources/img/**/*.{jpg,jpeg,png,gif,svg}",
        },
        sprites: {
            src: "./src/resources/img/sprite/*.svg",
            dist: "./build/img/sprite/",
            watch: "./src/resources/img/svg/*.svg",
        },
        fonts: {
            src: "./src/resources/fonts/**/*.{woff,woff2}",
            dist: "./build/fonts/",
            watch: "./src/resources/fonts/**/*.{woff,woff2}",
        },
        favicons: {
            src: "./src/resources/img/favicon/*.{jpg,jpeg,png,gif,tiff,svg}",
            dist: "./build/img/favicon/",
        },
        avif: {
            src: [
                "./src/resources/img/**/*.{jpg,jpeg,png,gif,tiff}",
                "!./src/resources/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            ],
            dist: "./build/img/",
            watch: "./src/resources/img/**/*.{jpg,jpeg,png,gif}",
        },
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
    "clean",
    gulp.parallel([
        "pug",
        "styles",
        "scripts",
        "images",
        "webp",
        "avif",
        "sprites",
        "fonts",
        "favicons",
    ]),
    gulp.parallel("serve"),
);

export const prod = gulp.series(
    "clean",
    gulp.parallel([
        "pug",
        "styles",
        "scripts",
        "images",
        "webp",
        "avif",
        "sprites",
        "fonts",
        "favicons",
    ]),
);

export default development;
