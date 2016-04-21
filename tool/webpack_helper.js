"use strict";
const fse = require('fs-extra'),
      path = require('path'),
      Helper = require('./helper'),
      PC = require("../project.config"),
      DistFolder = PC.js.webpack;

let makeEntry = ()=> { 
  return Helper.walk(DistFolder, 2).reduce((last, item)=> {
    let _controller = path.basename(path.dirname(item))
    let _action = path.basename(item)
    last[_controller] = last[_controller] || []
    last[_controller].push(DistFolder + '/' + _controller + '/' + _action)
    return last
  },{})
}


module.exports = {
  makeEntry: makeEntry
}

