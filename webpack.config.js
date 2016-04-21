var webpack = require("webpack"),
    PC = require("./project.config"),
    WH = require("./tool/webpack_helper");


module.exports = {
  entry: WH.makeEntry(),
  output: {
    path: __dirname + PC.js.webpack,
    filename: "[name].js"
  },
  resolve: {
    alias: {
      'swiper.jquery.min' : 'libs/swiper.jquery.min.js', 
    }
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
  ]
}
 
