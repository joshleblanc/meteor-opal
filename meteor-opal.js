import { Builder } from 'opal-compiler';

export const name = 'meteor-opal';
const builder = Builder.create();

const handler = compileStep => {
  const source = compileStep.read().toString('utf8');
  const outputFile = compileStep.inputPath + ".js";

  try {
    builder.buildString(source).toString();
    compileStep.addJavaScript({
      path: outputFile,
      sourcePath: compileStep.inputPath,
      data: output,
      bare: compileStep.fileOptions.bare
    });
  } catch(e) {
    throw new Error(
      compileStep.inputPath + ": " + (e.location ? (e.location.first_line + ": ") : ' ') + e.message
    );
  }
}

Plugin.registerSourceHandler("rb", handler);
Plugin.registerSourceHandler("js.rb", handler);