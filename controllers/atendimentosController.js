const { Atendimentos } = require('../models')
const { Pacientes } = require('../models')
const { Psicologos } = require('../models')


const atendimentosController = {
  // LISTAR 
  async listarTodos(req, res) {
    try {
      const listarAtendimentos = await Atendimentos.findAll();

      res.json(listarAtendimentos)
    } catch (error) {
      return res.status(500).json(error);
    } 
  },

  // POR ID
  async listarPorId(req, res){
    try {
      const { id } = req.params;

    const atendimentosId = await Atendimentos.findOne({
      where: {
        id,
      }
    });
    if (!atendimentosId) {
      return res.status(404).json("id não encontrado");
  };

    res.status(200).json(atendimentosId);
    
    } catch (error) {
      return res.status(500).json(`Error: ${error}`);
    }
    
  },

    // CADASTRAR
    async cadastrar(req, res) {
    
      try {
        const { paciente_id, data_atendimento, observacao } = req.body;
        const psicologo_id = req.auth.id;
        console.log(psicologo_id)

        const novosAtendimentos = await Atendimentos
        .create({
        paciente_id,
        psicologo_id,
        data_atendimento,
        observacao,
        
      })

      res.status(201).json(novosAtendimentos);
      
  
      } catch (error) {
        return res.status(400).json(`Error: ${error}`);
      }
      
    }
}

module.exports = atendimentosController;