const Builder = Npm.require('opal-compiler').Builder;


class OpalCompiler {
  processFilesForTarget(files) {
    files.forEach((file) => {
      const builder = Builder.create();
      const output = builder.buildString(file.getContentsAsString()).toString('utf8');
      const map = JSON.parse(builder.getSourceMap().$map().$to_s().replace(/\=\>/g, ":"));
      map.sections[0].map.sources = [file.getDisplayPath()];
      file.addJavaScript({
        data: output,
        path: `${file.getDisplayPath()}.js`
      });
    })
  }
}

Plugin.registerCompiler({
  extensions: ['rb', 'js.rb'],
  filenames: []
}, () => new OpalCompiler);