// ==========================================================================
// Dependencies & SETTINGS
// ==========================================================================

import gulp from 'gulp';
import runSequence from 'run-sequence';

const browserSync = require('browser-sync').create();

const DEBUG = !process.argv.includes('--release');

const SETTINGS = {
    path: {
        src: './src',
        dist: './',
    },
    server: true,
};

/**
 * Функция для ленивого вызова gulp задач.
 * @param taskName - имя задачи
 * @param path - путь до файла конфигурации задачи
 * @param options - настройки необходимый для задачи
 * @returns {Function}
 */
function lazyRequireTasks(taskName, path, options = {}) {
    gulp.task(taskName, function (callback) {
        const task = require(path).call(this, options);
        return task(callback);
    });
}

// ==========================================================================
// General tasks
// ==========================================================================
lazyRequireTasks('assets', './tasks/assets', {
    src: `${SETTINGS.path.src}/assets/**/*`,
    dst: `${SETTINGS.path.dist}/assets`,
});


lazyRequireTasks('images:min', './tasks/images-min', {
    src: `${SETTINGS.path.dist}/assets/img/*.*`,
    dst: `${SETTINGS.path.dist}/assets/img`,
});

lazyRequireTasks('webpack', './tasks/webpack', {
    src: {
        main: `${SETTINGS.path.src}/js/entry.js`
    },
    dst: `${SETTINGS.path.dist}/assets`,
});


// ==========================================================================
// Project specific tasks
// ==========================================================================

gulp.task('watch', () => {
    gulp.watch(`${SETTINGS.path.src}/assets/**/*`, ['assets']);
});

gulp.task('server', () => {
    if (!SETTINGS.server) {
        return false;
    }

    browserSync.init({
        server: './',
        open: false,
    });
});

// ==========================================================================
// BUILD
// ==========================================================================

gulp.task('default', () => {
    if (DEBUG) {
        // Dev build
        runSequence(
            'assets',
            'webpack',
            'server'
        );
    } else {
        // Prod build
        runSequence(
            'assets',
            'webpack',
            'images:min',
            'server'
        );
    }
});
