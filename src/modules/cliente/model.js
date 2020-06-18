const { conex_db } = require('../../config/env/conexion')
const { conex_mssql } = require('../../config/mssql')
const { attr } = require('./attributes')

const sequelize = conex_mssql(conex_db)

exports.Cliente = sequelize.define('cliente', attr, { tableName: 'cliente' })
