const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    openPage: 'tech-test/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static', to: '' }],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.output.publicPath = './';
  }

  return config;
};
