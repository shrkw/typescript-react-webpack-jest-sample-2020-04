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
    extensions: [ // importできるファイルの拡張子
      '.ts', '.tsx', '.js', '.json'
    ],
  },
  devtool: 'inline-source-map',  // sourcemapを使えるようにする
  devServer: {  // 開発用のローカルサーバの設定
      contentBase: "./dist",
      host: '0.0.0.0',
      port: "3035"
  }
};