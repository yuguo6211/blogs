'use strict';

let obj = require('./basic');
let sql = 'select * from user';

let results = obj.Basic(sql);
results.then((data)=> {
  console.log(data)
})
