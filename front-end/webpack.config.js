const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Where to start bundling files
  mode: 'development', // Sets development mode. No mode flag needed
  // module defines how the modules are transformed with the rules
  module: {
    rules: [
      {
        // Use babel for every js and jsx outside of exclude
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  // Where to put the bundled code
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
  },
  devtool: 'eval-source-map', // Controls if and how source maps are generated.
};
