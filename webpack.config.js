var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /tmp/],
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.json'
    ],
    alias: {
      '@': `${__dirname}/src`
    },
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: "./dist",
      host: '0.0.0.0',
      port: "3035"
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/html/index.html"
  })]
};