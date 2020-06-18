const Sequelize =  require('sequelize')

let sequelize = null
const dialectOptions = { options: { useUTC: false, dateFirst: 1 } }

const Conex_mssql = (setup) => {
  const { host, username, password, database } = setup
  return !sequelize ? sequelize = new Sequelize(database, username, password,
      { host, dialect: 'mssql',
        dialectOptions,
        logging: false,
        timezone: '-05:00'
      }
    ) : sequelize
}

console.log("La Conexión se ha realizado con Éxito")
exports.conex_mssql = Conex_mssql