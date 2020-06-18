/* "Interpolación la variable que está entre llaves {} -- "
    Me traido la variable que se exporta del archivo conexion.js */
const { conex_db } = require('./src/config/env/conexion');
const { app } = require('./src/config/express')
const { conex_mssql } = require('./src/config/mssql');

app.listen(process.env.PORT || 3100, function () {
    console.log("Servidor Arrancando por el Puerto: ");
});