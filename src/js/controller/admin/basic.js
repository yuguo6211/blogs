'use strict';

let mysql      = require('mysql');
let connection = '';
const Basic = (sql)=> {
  connection = mysql.createConnection({
    host     : '192.168.1.6',
    user     : 'root',
    password : '',
    database : 'yuguo',
    port: '3306', 
  });
  
  return new Promise((resolve)=> {
    linkDatabase(sql)
    .then(returnData)
    .then(closeDatabase).then((data)=> {
      resolve(data);
    });
  })
}

function linkDatabase(sql){
  return new Promise((resolve)=> {
    connection.connect(function(err) {
      if(err) {
        console.log('[query] -:'+err);
        return;
      }
      //console.log('链接数据库成功');
      resolve(sql)
    });
  })
}

function returnData(sql) {
  return new Promise((resolve)=> {
    connection.query(sql, function(err, rows, fields) {
      if (err) throw err;
      resolve(rows)
    });
  })
   
}

function closeDatabase(data) {
  return new Promise((resolve)=> {
    connection.end();
    resolve(data);
  })
}

module.exports = {
  Basic: Basic,
}
