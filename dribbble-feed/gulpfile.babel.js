import assemble from 'fabricator-assemble';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import cssnano from 'gulp-cssnano';
import del from 'del';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import path from 'path';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import webpack from 'webpack';

const reload = browserSync.reload;


// configuration
const config = {
	templates: {
		src: ['src/templates/**/*', '!src/templates/+(layouts|components)/**'],
		dest: 'dist',
		watch: ['src/templates/**/*', 'src/data/**/*.json'],
		layouts: 'src/templates/layouts/*',
		partials: ['src/templates/components/**/*'],
		data: 'src/data/**/*.{json,yml}'
	},
	scripts: {
		src: './src/assets/scripts/main.js',
		dest: 'dist/assets/scripts',
		watch: 'src/assets/scripts/**/*'
	},
	styles: {
		src: 'src/assets/styles/main.scss',
		dest: 'dist/assets/styles',
		watch: 'src/assets/styles/**/*',
		browsers: ['last 1 version']
	},
	dev: gutil.env.dev
};


// clean
gulp.task('clean', del.bind(null, ['dist']));


// templates
gulp.task('templates', (done) => {
	assemble({
		layouts: config.templates.layouts,
		views: config.templates.src,
		materials: config.templates.partials,
		data: config.templates.data,
		keys: {
			views: 'templates',
			materials: 'components'
		},
		dest: config.templates.dest,
		logErrors: config.dev,
		helpers: {}
	});
	done();
});


// scripts
const webpackConfig = require('./webpack.config')(config);

gulp.task('scripts', (done) => {
	webpack(webpackConfig, (error, stats) => {
		if (error) {
			gutil.log(gutil.colors.red(error));
		}
		const statsObj = stats.toJson();
		if (statsObj.errors.length) {
			statsObj.errors.forEach((err) => {
				gutil.log(gutil.colors.red(err));
			});
		}
		done();
	});
});

gulp.task('lint', (done) => {
	return gulp.src(config.scripts.watch)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(gulpif(!config.dev, eslint.failAfterError()));
});


// styles
gulp.task('styles', () => {
	return gulp.src(config.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: './node_modules'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.styles.browsers
		}))
		.pipe(gulpif(!config.dev, cssnano()))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.styles.dest))
		.pipe(gulpif(config.dev, reload({ stream: true })));
});


// server
gulp.task('serve', () => {

	browserSync({
		server: {
			baseDir: config.templates.dest
		},
		notify: false,
		logPrefix: 'BrowserSync'
	});

	gulp.task('templates:watch', ['templates'], reload);
	gulp.watch(config.templates.watch, ['templates:watch']);

	gulp.task('styles:watch', ['styles']);
	gulp.watch(config.styles.watch, ['styles:watch']);

	gulp.task('scripts:watch', ['scripts'], reload);
	gulp.watch(config.scripts.watch, ['scripts:watch']);

});


// default build task
gulp.task('default', ['clean', 'lint'], () => {

	// define build tasks
	const tasks = [
		'templates',
		'scripts',
		'styles',
	];

	// run build
	runSequence(tasks, () => {
		if (config.dev) {
			gulp.start('serve');
		}
	});

});
