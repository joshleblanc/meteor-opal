const path = Npm.require('path');

Opal.require('erb');
const ERB = Opal.const_get_qualified(Opal.const_get_relative([], 'Opal'), 'ERB');

class OpalCompiler {
    processFilesForTarget(files) {
        files.forEach(file => {
            const output = ERB.$compile(file.getContentsAsString(), file.getPathInPackage());
            file.addJavaScript({
                data: output,
                path: `${file.getPathInPackage()}.js`
            });

        })
    }
}

Plugin.registerCompiler({
    extensions: ['html.erb', 'erb', 'opalerb'],
    filenames: []
}, () => new OpalCompiler());