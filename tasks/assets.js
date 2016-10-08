'use strict';

import gulp from 'gulp';

/**
 * Копирование assets.
 * @param options
 * @returns {Function}
 */
module.exports = function(options) {

    return function() {

        return gulp.src(options.src)
            .pipe(gulp.dest(options.dst));

    }

};