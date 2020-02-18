Package.describe({
    name: 'cereal:opal-compiler',
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
        'opal/opal.js',
        'opal/opal-parser.js',
        'plugin/plugin.js',
        'opal/securerandom.js'

    ]
});

Package.registerBuildPlugin({
    name: "compileERB",
    use: ['caching-compiler'],
    sources: [
        'opal/opal.js',
        'opal/erb.js',
        'plugin/erb.js'
    ]
});

Package.onUse(function (api) {
    api.versionsFrom('1.9');
    api.addFiles([
        'opal/opal.js',
        'opal/native.js',
        'opal/js.js',
        'opal/erb.js',
        'opal/securerandom.js'
    ], ['client', 'server']);
    api.mainModule('lib/main.rb');
    api.addFiles('lib/meteor.rb');
    api.addFiles('lib/collection.rb');
    api.addFiles('lib/controller.rb');
    api.addFiles('lib/meteor_opal.rb');
    api.addFiles('lib/tracker.rb');
    api.use("isobuild:compiler-plugin");
});
