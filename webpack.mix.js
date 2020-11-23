const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .extract();

/*
	<!--To avoid JavaScript errors, be sure to load these files in the proper order:-->

	<script src="/js/manifest.js"></script>
	<script src="/js/vendor.js"></script>
	<script src="/js/app.js"></script>
*/