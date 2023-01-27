import { deleteAsync } from 'del';
import GulpZip from 'gulp-zip';

export const zip = () => {
    deleteAsync(`./${app.path.rootFolder}.zip`);
    return app.gulp
        .src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(GulpZip(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
};
