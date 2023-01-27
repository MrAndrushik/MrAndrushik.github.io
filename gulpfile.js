// Основной модуль
import gulp from 'gulp';
import { path } from './gulp/config/path.js';

// Импорт задач
import { html } from './gulp/tasks/html.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Глобальная переменная
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path,
    gulp,
    plugins,
};

// Наблюдатель за изменениями файлов
function wathcer() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Главные задачи
const mainTasks = gulp.parallel(fonts, html, scss, js, images);

// Построение сценариев
const dev = gulp.series(reset, mainTasks, gulp.parallel(wathcer, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);

export { dev };
export { build };
export { deployZip };

// Выполнение задач
gulp.task('default', dev);
