module.exports = {
module: {
    loaders: [
      // for good ol' css
      { test: /\\.css$/, use: ['style-loader', 'css-loader'] },
      // OR if using less
      { test: /\\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // OR if using scss
      { test: /\\.scss$/, use: ['style-loader', 'css-loader', 'scss-loader'] },
  
      // images and fonts
      {
        test: /\\.(gif|ttf|eot|svg|woff2?)$/,
        use: 'url-loader?name=[name].[ext]',
      },
    ]
  }
}