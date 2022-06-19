import path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const pub = path.resolve(__dirname, 'public');

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.join(src, 'index.tsx'),
  output: {
    path: dist,
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(pub, 'index.html'),
    }),
  ]
};

export default config;
