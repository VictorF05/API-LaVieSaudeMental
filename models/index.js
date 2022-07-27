const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Pacientes.belongsToMany(
    Psicologos, 
    {
        foreignKey: 'paciente_id',
        through: Atendimentos
    }
)

Psicologos.belongsToMany(
    Pacientes, 
    {
        foreignKey: 'psicologo_id',
        through: Atendimentos
    }
)

Atendimentos.belongsTo(Psicologos, {
    constrain: true,
    foreignKey: 'id'
})

Atendimentos.belongsTo(Pacientes, {
    constrain: true,
    foreignKey: 'id'
})

module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
};