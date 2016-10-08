'use strict';

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

/**
 * Минификация изображений
 * @param options
 * @returns {Function}
 */
module.exports = function(options) {

    return function() {
        return gulp.src(options.src)
            .pipe(imagemin())
            .pipe(gulp.dest(options.dst))
    }
};