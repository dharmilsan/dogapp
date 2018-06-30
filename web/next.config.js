//reference: https://github.com/zeit/next.js/issues/858
//https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/web-support/config/webpack.config.dev.js

module.exports = {
  webpack: function (config) {
    //support .web.js 
    config.resolve.extensions = [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"];
    return config
  }
}