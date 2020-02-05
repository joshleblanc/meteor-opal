const Builder = Npm.require('opal-compiler').Builder;


class OpalCompiler {
  processFilesForTarget(files) {
    const builder = Builder.create();

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