import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import gulpGroupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpWebpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import GulpCleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export const scss = () => {
    return (
        app.gulp
            .src(app.path.src.scss, { sourcemaps: app.isDev })
            .pipe(app.plugins.replace(/@img\//g, '../img/'))
            .pipe(
                sass({
                    outputStyle: 'expanded',
                })
            )
            .pipe(app.plugins.if(app.isBuild, gulpGroupCssMediaQueries()))
            // .pipe(
            //     app.plugins.if(
            //         app.isBuild,
            //         gulpWebpcss({
            //             webpClass: '.webp',
            //             noWebpClass: '.no-webp',
            //         })
            //     )
            // )
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    autoPrefixer({
                        grid: true,
                        overrideBrowserlist: ['last 3 versions'],
                        cascade: true,
                    })
                )
            )
            .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.css)))
            .pipe(GulpCleanCss())
            .pipe(
                rename({
                    extname: '.min.css',
                })
            )
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browserSync.stream())
    );
};
