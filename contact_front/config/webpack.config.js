const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  filename: './index.html',
  template: './src/index.html',
})

const rules = [
  {
    exclude: /node_modules/,
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
]

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules,
  },
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [htmlPlugin],
}
