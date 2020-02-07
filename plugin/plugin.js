const path = Npm.require('path');

Opal.require('opal-parser');
class OpalCompiler {
  processFilesForTarget(files) {
    files.forEach(file => {
      const output = Opal.compile(file.getContentsAsString());
      file.addJavaScript({
        data: output,
        path: `${file.getPathInPackage()}.js`
      });
    })
  }
}

Plugin.registerCompiler({
  extensions: ['rb', 'js.rb'],
  filenames: []
}, () => new OpalCompiler());