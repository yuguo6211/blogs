'use strict';

var obj = require('./basic');
var sql = 'select * from user';

var results = obj.Basic(sql);
results.then(function (data) {
  console.log(data);
});