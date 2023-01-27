import browserSync from 'browser-sync';
import replace from 'gulp-replace';
import newer from 'gulp-newer';
import gulpIf from 'gulp-if';

export const plugins = {
    replace,
    browserSync,
    newer,
    if: gulpIf,
};
