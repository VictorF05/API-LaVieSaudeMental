const db = require("../database");
const { DataTypes } = require("sequelize");


const Psicologos = db.define('Psicologos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING
  },
  apresentacao: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// criar tabela
// Psicologos.sync()

// alterar
// User.sync({ alter: true })

module.exports = Psicologos;