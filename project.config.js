/**
 * 项目前端打包配置
 * null
 */
module.exports = {
  assets: {
    src: './src',
    dist: './dist'
  },
  js: {
    src: './src/js',
    dist: './dist/js',
    webpack: './dist/js/controller',
    vendor: {
      src: 'vendor/js/*.js',
      dist: 'dist/js/vendor.min.js'
    },
    vendor: {
      src: 'vendor/js/*.js',
      dist: 'dist/js/vendor.min.js'
    }
  },
  css: {
    src: './src/css',
    dist: './dist/css'
  },
  test: {
    src: './test'
  },
  eslint: {
    src: './src/js'
  }
}
