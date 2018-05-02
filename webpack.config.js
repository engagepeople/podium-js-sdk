module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    filename: "index.js",
    path: __dirname + "/dist",
    library: 'podiumAdminSdk',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {test: /\.tsx?$/, loader: "ts-loader"},

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          failOnHint: true
        }
      }
    ]
  }
}
