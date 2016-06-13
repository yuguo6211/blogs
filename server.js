'use strict';
require("babel-polyfill");

var Koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var bodyParser = require('koa-bodyparser');
var app = new Koa(); 
var serve = require('koa-static');
var mount = require('koa-mount');
let db = require('./basic');

// 静态文件服务
app.use(mount('/src', serve(__dirname + '/src')));
app.use(mount('/resource', serve(__dirname + '/resource')));

app.use(views(__dirname + '/views'))
app.use(bodyParser());

router.post('/login', async (ctx, next) => {
  let data = ctx.request.body;
  let sql = "select uid from user where username = '" + data.username + "' and pwd = '" + data.pwd + "'";
  let searchSql = db.Basic(sql);
  await searchSql.then((results)=> {
    let len = results.length;
    let res = {
      data:results,
      msg:'',
      state:'',
    }
    if(len) {
      res.state = true;
      res.msg = '登录成功';
      ctx.body = res
    } else {
      res.state = false;
      res.msg = '用户名或密码错误';
      ctx.body = res
    }
  })
})



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

app.listen(2016);
