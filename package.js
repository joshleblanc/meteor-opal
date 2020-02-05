Package.describe({
  name: 'cereal:meteor-opal',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/joshleblanc/meteor-opal',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.registerBuildPlugin({
  name: "compileOpal",
  use: ['caching-compiler'],
  sources: [
    'plugin.js'
  ],
  npmDependencies: {
    "opal-compiler": "1.0.15"
  }
});


Package.onUse(function(api) {
  api.versionsFrom('1.9');
  api.use("ecmascript");
  api.use("isobuild:compiler-plugin")
  api.mainModule('main.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteor-opal');
  api.mainModule('meteor-opal-tests.js');
});

Npm.depends({
  "opal-runtime": "1.0.14"
});