module.exports = {
  entry: './client/app.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/ ,
        exclude: /(node_modules|bower_components)/,
        use: {loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"]
          }
        }
      }
    ]
  }
}