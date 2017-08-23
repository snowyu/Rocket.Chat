Package.describe({
	name: 'rocketchat:lovhom',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: 'Love Our Family',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

 /*
 Npm.depends() is fairly rigid (you can only depend on an exact version),
 and will typically result in multiple versions of a package being installed
 if many different Atmosphere packages depend on the same npm package.
 To avoid this problem You can use the tmeasday:check-npm-versions package.
//*/
// Npm.depends({
// 	'clipboard': '1.5.12',
//   "vue": "2.1.10",
//   "onsenui": '2.1.0',
//   "vue-onsenui": '2.0.0-alpha.0'
// });

Package.onUse(function(api) {
	api.use([
 		'mongo',
		'ecmascript',
		'templating',
		'coffeescript',
		'underscore',
		'rocketchat:lib',
		'meteorhacks:inject-initial',
    'akryum:vue',
    'akryum:vue-component',

    // Still need to specify versions of non-core packages
    'tmeasday:check-npm-versions@0.3.1'
	]);
	api.addFiles('client/lovhom.coffee', 'client');
	api.addFiles('client/lovhom.html', 'client');
	api.addFiles('client/widget.vue', 'client');
	// api.addFiles('master/main.coffee', 'client');
	// api.addFiles('server/inject.js', 'server');
});
