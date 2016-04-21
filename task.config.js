/**
 * 任务配置  命令 + 提示信息
 * @type {[type]}
 */
const PC = require('./project.config');
const tasks = {
  'clear': {
    cmd: 'rm -rf ' + PC.assets.dist,
    tip: '清空目标文件夹内容'
  },
  'babel': {
    cmd: 'babel ' + PC.js.src + ' -d ' + PC.js.dist,
    tip: 'babel ES6转码ES5'
  },
  'webpack': {
    cmd: 'webpack',
    tip: 'webpack 打包JS'
  },
  'minify:js': {
    cmd: 'node tool/minify_js.js',
    tip: 'JS 压缩'
  },
  'vendor:js': {
    cmd: 'uplifyjs ' + PC.js.vendor.src + ' -o ' + PC.js.vendor.dist + ' --compress',
    tip: '压缩打包 公共JS'
  },
  'sass': {
    cmd: 'node-sass --output-style compressed ' + PC.css.src + ' -o ' + PC.css.dist,
    tip: 'Sass 预处理'
  },
  'concat:css': {
    cmd: 'node tool/concat_css.js',
    tip: 'Css 合并'
  },
  'vendor:css': {
    cmd: 'cat vendor/css/*  | cleancss -o  dist/css/vendor.min.css --s0',
    tip: '压缩打包 公共Css'
  }
}

/**
 * 任务组合
 */
const group = {
  "css": ['sass', 'concat:css'],
  "js": ['babel', 'webpack', 'minify:js']
}

module.exports = {
  tasks: tasks,
  group: group
}
