const { Psicologos } = require("../models");
// const { atualizar } = require("./pacientesController");
const bcript = require('bcryptjs');

const psicologoController = {
  // LISTAR 
  async listarPsicologos(req, res) {
    try {
      const listaPsicologos = await Psicologos.findAll();

    res.json(listaPsicologos)
    } catch (error) {
      return res.status(500).json(`Error: ${error}`);
    } 
  },

  // POR ID
  async psicologoPorId(req, res){
    try {
      const { id } = req.params;

    const psicologoId = await Psicologos.findOne({
      where: {
        id,
      }
    });
    if (!psicologoId) {
      return res.status(404).json("id não encontrado");
  };

    res.status(200).json(psicologoId);
    
    } catch (error) {
      return res.status(500).json(`Error: ${error}`);
    }
    
  },

  // CADASTRAR
  async cadastrarPsicologo(req, res) {
    
    try {
      const { nome, email, senha, apresentacao} = req.body;
      const novaSenha = bcript.hashSync(senha, 10);
      const novosPsicologos = await Psicologos
      .create({
      nome,
      email,
      senha: novaSenha,
      apresentacao,
    })
    res.status(201).json(novosPsicologos);

    } catch (error) {
      return res.status(500).json(`Error: ${error}`);
    }
    
  },

  // ATUALIZAR
  async atulizarPsicologo(req, res) {
    
    try {
    const { id } = req.params;
    
    const { nome, email, senha, apresentacao } = req.body;

    const novaSenha = bcript.hashSync(senha, 10)

    await Psicologos.update(
      {
        nome,
        email,
        senha: novaSenha,
        apresentacao
      },
      {
        where: {
          id,
        }
      }
      );

      const psicologoAtt = await Psicologos.findOne({
        where: {
          id,
        }
      });

      if (!psicologoAtt) {
        return res.status(404).json("id não encontrado");
    };

      res.status(200).json(psicologoAtt)
    } catch (error) {
      return res.status(500).json(`Error: ${error}`);
    }
    
  },

  // DELETAR
  async deletarPsicologo(req, res) {
    try {
      const { id } = req.params;

      const psicologoDeletado = await Psicologos.destroy({
      where: {
        id,
      },
    });

    if (!psicologoDeletado) {
      return res.status(404).json("profissional não encontrado");
  };

    res.status(204).json('cadastro apagado')

    } catch (error) {
      return res.status(500).json(`Error: ${error}`);
    };
    
  },

  
}

module.exports = psicologoController;