const db = require("../database");
const { DataTypes } = require("sequelize");
const Pacientes = require('../models/Pacientes')
const Psicologos = require('../models/Psicologos')

const Atendimentos = db.define(
    "Atendimentos", 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      paciente_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Pacientes,
              key: 'id'
            }
        },
      psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Psicologos,
              key: 'id'
            }
        },
        data_atendimento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        observacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
    }, 
    {
        tableName: "atendimentos"
    },
);

// Atendimentos.sync()

module.exports = Atendimentos;