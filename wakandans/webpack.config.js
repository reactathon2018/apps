var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
   module: {
      rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {presets: ['es2015', 'react']}
	 },
{
  test: /\.css$/,
  loader: 'style-loader'
}, {
  test: /\.css$/,
  loader: 'css-loader',
  query: {
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }}
]
   }
}
module.exports = config;