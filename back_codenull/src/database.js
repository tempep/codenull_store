const mysql = require('mysql');
const { promisify }= require('util');
const {database} = require('../keys');
require("colors");

//Configurando conexion a la base de datos
  const conexion = mysql.createPool(database);
  require("colors");

  conexion.getConnection((err, connection) => {
    if (err) {
      require("colors");
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.'.red);
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has to many connections'.red);
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused'.red);
      }
    }

    if (connection) {
      connection.release();
      console.log('Database is Connected'.blue);
    }

    return;
  });

// Promisify Pool Querys
conexion.query = promisify(conexion.query);

module.exports = conexion;