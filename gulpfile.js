// Modules
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	prefix = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css'),

	source = require('vinyl-source-stream'),
	browserify = require('browserify'),

	php = require('gulp-connect-php'),
	imgopt = require('gulp-imageoptim'),
	browsersync = require('browser-sync').create();
	//sourcemaps = require('gulp-sourcemaps'),


// Paths
var base	=	'',

	bld		=	base	+ 'build/',
	app 	=	base	+ 'src/',

	mkpDir	=	app 	+ '',
	mkpBld	=	bld 	+ '',

	imgDir	=	app 	+ 'img/',
	imgBld	=	bld 	+ 'img/',

	sassDir	=	app 	+ 'sass/',
	cssBld	=	bld 	+ 'css/',
	mapDir	=	cssBld	+ 'map/',

	jsDir	=	app 	+ 'js/',
	jsBld	=	bld 	+ 'min/',

	vendor	=	app		+ 'vendor/',
	vndBld	=	bld		+ 'min/',

	miscDir	=	app		+ 'uploads/';


// Concatenate JS
gulp.task('scripts',function(){
	//Use an array to specify order:
	//return gulp.src([
	//	jsDir + 'owl.carousel.js',
	//	jsDir + 'js.js'])
	return gulp.src(jsDir + '*.js')
		.pipe(plumber())
		.on('error', function (err){
			console.error('!!!JS!!!', err.message);})
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(jsBld))
});


// Uglify JS
gulp.task('uglify', ['scripts'], function() {
	return gulp.src(jsBld + 'scripts.js')
		.pipe(plumber())
		.pipe(uglify({preserveComments: 'license'}))
		.pipe(gulp.dest(jsBld));
});

// Browserify
var customOpts = {entries: [vendor + 'vendor.js']};
var b = browserify(customOpts);

gulp.task('bundle', bundle);

function bundle() {
	return b.bundle()
		.pipe(plumber())
		.on('error', function (err){
			console.error('!!!VENDOR!!!', err.message);})
		.pipe(source('vendor.js'))
		.pipe(gulp.dest(vndBld));
}

gulp.task('mindep', ['bundle'], function() {
	return gulp.src(vndBld + 'vendor.js')
		.pipe(plumber())
		.pipe(uglify({preserveComments: 'license'}))
		.pipe(gulp.dest(vndBld));
});


// SASS
gulp.task('styles',function(){
	return sass(sassDir + 'style.scss')
		.pipe(plumber())
		.on('error', function (err) {
			console.error('!!!CSS!!!', err.message);})
		.pipe(prefix({
			browsers: ['last 3 versions', 'ie 9'],
			cascade: false
		}))
		.pipe(gulp.dest(cssBld))
		.pipe(browsersync.stream({match: '**/*.css'}));
		cb(err);
});


// Minify CSS
gulp.task('minify-css', ['styles'], function() {
	return gulp.src(cssBld + '*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest(cssBld))
});


// Image Optimization
gulp.task('images', function() {
	return gulp.src(imgDir + '*')
		.pipe(imageOptim.optimize())
		.pipe(gulp.dest(imgBld));
});


// Markup Stuff
gulp.task('markup',function(){
	return gulp.src(mkpDir + '**/*.php', {base: mkpDir})
		.pipe(gulp.dest(mkpBld))
		.pipe(browsersync.stream());
});


// PHP
gulp.task('php', function() {
	php.server({ base: bld, port: 5678, keepalive: true});
});


// BrowserSync
gulp.task('watch', ['default', 'php'], function() {
	browsersync.init({
		proxy: '127.0.0.1:5678',
		port: 1234,
		open: true,
		notify: false
	});
	gulp.watch(jsDir + '*.js',['scripts']).on("change", browsersync.reload);
	gulp.watch(mkpDir + '**/*.php',['markup']);
	gulp.watch(sassDir + '*.scss',['styles']);
});


// Sync Assets
gulp.task('sync-assets', function() {
	var environment = 'test';

	if (argv.prod)  { environment = 'prod'; }
	if (argv.stage) { environment = 'stage'; }
	if (argv.test)  { environment = 'test'; }

	gulp.src( [ miscDir ] )
		.pipe(rsync({
			root: miscDir,
			username: 'push_dev',
			hostname: 'XXXXXX.prod',
			destination: '/var/www/vhosts/www.XXXXXX.com/' + environment + '/' + miscDir,
			incremental: true,
			progress: true,
			relative: false,
			emptyDirectories: true,
			recursive: true
		}));

	return run('rsync -chavzP --stats push_dev@XXXXXX.prod:~/www.XXXXXX.com/' + environment + '/' + miscDir + '* ' + miscDir)
		.exec();
});


// DEFAULT
gulp.task('default',[
	'scripts',
	'styles',
	'markup']);

gulp.task('build',[
	'uglify',
	'minify-css',
	'markup']);