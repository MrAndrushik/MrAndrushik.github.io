import rename from 'gulp-rename';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack-stream';

// export const js = () => {
//     console.log(app.path.src.js);
//     return app.gulp
//         .src(app.path.src.js, { sourcemaps: app.isDev })
//         .pipe(
//             webpack({
//                 mode: app.isBuild ? 'production' : 'development',
//                 output: {
//                     filename: 'app.min.js',
//                 },
//             })
//         )
//         .pipe(app.gulp.dest(app.path.build.js))
//         .pipe(app.plugins.browserSync.stream());
// };

export const js = () => {
    let webpackConf = {
        mode: `${app.isDev === true ? 'development' : 'production'}`, // current mode for webpack
        output: {
            filename: `[name].js`, // the same name as the source
            sourceMapFilename: '[name].map',
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/, // get all js-files
                    exclude: /(node_modules)/, // exclude development modules folder
                    loader: 'babel-loader', // convert ES6 into a backwards compatible version of JS in older browsers
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
    };

    // convert Gulp array into entry property for Webpack
    let fileName = null;
    let entryObj = {};
    app.path.src.js.map((filePath) => {
        fileName = filePath.split('/').pop().split('.').slice(0, -1).join('.');
        entryObj[fileName] = filePath;
    });

    // add converted entry property to Webpack
    webpackConf.entry = entryObj;

    // console.log(webpackConf.module.rules);

    return app.gulp
        .src(app.path.src.js)
        .pipe(webpack(webpackConf))
        .on('error', function handleError() {
            this.emit('end');
        })
        .pipe(rename({ suffix: '.min' })) // add suffix to the filename
        .pipe(app.gulp.dest(app.path.build.js)) // build final min js
        .pipe(app.plugins.browserSync.reload({ stream: true })); // browser-sync reload
};
