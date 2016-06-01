"use strict";

const exec = require('child_process').exec,//获取执行命令函数
      TC = require('../task.config'),//引入任务配置文件
      colors = require('colors'),//以内颜色配置
      tasks = TC.tasks,//任务对象
      group = TC.group;//任务组

const arg = process.argv[2];//进程参数

/**
 * 根据命令解析执行任务的命令序列对象
 * @return {array} [命令序列]
 */
let getItems = () => {
  //判断是否有指定命令参数
  if(arg) {
    //解析任务组命令
    if(group[arg]) {
      return group[arg].map((item) => {
        return tasks[item];
      })
    }
    if (tasks[arg]) return [tasks[arg]];
  }

  //返回全部配置命令
  let ts = [];
  for(let item in tasks) {
    ts.push(tasks[item]);
  }
  return ts;
} 

/**
 * 定义执行解析命令序列（逐个执行）
 * @return {null}
 */
let build = () => {
  let startTime = Date.now();
  let endTime = Date.now();
  getItems().forEach((item) => {
    console.log(('[' + item.tip.green + ']' + '开始...'));
    console.log(item.cmd)
    exec(item.cmd);
    endTime = Date.now();
    console.log(('[' + item.tip.green  + ']完成，耗时' + showTime(endTime) + '秒'));
  });
  console.log('打包结束，共耗时：' + showTime(startTime) + '秒'.green );
}

/**
 * 计算执行时间
 * @param  {number} time [开始时间]
 * @return {number}      [距离当前时间的差，单位:s(秒)]
 */
let showTime = (time) => {
  return (Date.now() - time) / 1000;
}

/**
 * 执行build函数
 */
build();
