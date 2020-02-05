const Builder = Npm.require('opal-compiler').Builder;


class OpalCompiler {
  processFilesForTarget(files) {

    files.forEach((file) => {
      const builder = Builder.create();
      const output = builder.buildString(file.getContentsAsString()).toString();
      console.log(Object.getOwnPropertyNames(builder.getSourceMap().$map().to_n()));
      file.addJavaScript({
        data: output,
        sourceMap: builder.getSourceMap().$map(),
        path: `${file.getPathInPackage()}.js`
      })
    })
  }
}

Plugin.registerCompiler({
  extensions: ['rb', 'js.rb'],
  filenames: []
}, () => new OpalCompiler);