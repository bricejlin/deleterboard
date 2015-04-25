module.exports = {
  entry: './app/node_modules/main.js',
  output: {
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  }
};