const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log(__dirname);

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: './app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
