'use strict';
require("babel-polyfill");

var Koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var app = new Koa(); 
var serve = require('koa-static');
var mount = require('koa-mount');

// 静态文件服务
app.use(mount('/src', serve(__dirname + '/src')));
app.use(mount('/resource', serve(__dirname + '/resource')));


app.use(views(__dirname + '/views'));

router.get('/:controller/:action', async (ctx, next) => {
  console.log(ctx.params)
  var vi = ctx.params.controller + '/' + ctx.params.action + '.jade'
  await ctx.render(vi,{params: ctx.params});
})

router.get('/:controller', async (ctx, next) => {
  var vi = ctx.params.controller + '/home.jade'
  await ctx.render(vi,{params: ctx.params})
})

router.get('/', async (ctx, next) => {
  var vi = 'home/home.jade'
  await ctx.render(vi,{params: ctx.params})
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(2015);
