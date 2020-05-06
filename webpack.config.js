const path = require('path');

module.exports = {
  entry: './client/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              '@babel/preset-react',
              'babel-preset-airbnb',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js',
      '.jsx',
    ],
  },
};
