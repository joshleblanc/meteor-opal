const Builder = Npm.require('opal-compiler').Builder;

const builder = Builder.create();

class OpalCompiler {
  processFilesForTarget(files) {
    files.forEach((file) => {
      console.log(file);
      const output = builder.buildString(file.getContentsAsString()).toString();
      file.addJavaScript({
        data: output,
        path: `${file.getPathInPackage()}.js`
      })
    })
  }
}

Plugin.registerCompiler({
  extensions: ['rb', 'js.rb'],
  filenames: []
}, () => new OpalCompiler);