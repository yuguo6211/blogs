'use strict';

var mysql = require('mysql');
var connection = '';

var Basic = function Basic(sql) {
  connection = mysql.createConnection({
    host: '192.168.1.6',
    user: 'root',
    password: '',
    database: 'yuguo',
    port: '3306'
  });

  return new Promise(function (resolve) {
    linkDatabase(sql).then(returnData).then(closeDatabase).then(function (data) {
      resolve(data);
    });
  });
};

function linkDatabase(sql) {
  return new Promise(function (resolve) {
    connection.connect(function (err) {
      if (err) {
        console.log('[query] -:' + err);
        return;
      }
      console.log('链接数据库成功');
      resolve(sql);
    });
  });
}

function returnData(sql) {
  return new Promise(function (resolve) {
    connection.query(sql, function (err, rows, fields) {
      if (err) throw err;
      resolve(rows);
    });
  });
}

function closeDatabase(data) {
  return new Promise(function (resolve) {
    connection.end();
    resolve(data);
  });
}

module.exports = {
  Basic: Basic
};