const Sequelize = require('sequelize')

exports.attr =
{
    numero_cli: { type: Sequelize.BIGINT,allowNull: false },
    nombre_cli: { type: Sequelize.STRING, allowNull: false },
    apellido_cli: { type: Sequelize.STRING, allowNull: false },
    fechanac_cli: { type: Sequelize.DATE, allowNull: false },
    sexo_cli: { type: Sequelize.INTEGER, allowNull: false },
    direccion_cli: { type: Sequelize.STRING, allowNull: true },
    telefono_cli: { type: Sequelize.STRING, allowNull: true },
    ciudad_cli: { type: Sequelize.STRING, allowNull: true },
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
}