const mysql = require('mysql');

const config = {
    host : '3.82.68.223',
    user : 'manu',
    database: 'negocio_agua',
    password: 'password',
};

const conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) throw err;
    console.log('*Conexión establecida*');
});

module.exports = conn;