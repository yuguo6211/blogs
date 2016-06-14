var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '192.168.1.6',
  user     : 'root',
  password : '',
  database : 'yuguo',
  port: '3306', 
});
 
connection.connect(function(err) {
  if(err) {
    console.log('[query] -:'+err);
    return;
  }
  console.log('---------------');
  console.log('链接数据库成功');
  console.log('---------------');
});

var sql = 'select * from user';
connection.query(sql, function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0]);
});
 
connection.end();
