const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  name: 'ts-with-webpack',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: {
    main: './src/app.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    devMiddleware: {
      publicPath: '/dist',
    },
    static: {
      directory: __dirname,
    },
    client: {
      logging: 'error',
    },
  },
};
