const { Psicologos } = require("../models");

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
      const { nome, email, apresentacao} = req.body
      const novosPsicologos = await Psicologos
      .create({
      nome,
      email,
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
    const { nome, email, apresentacao } = req.body;

    await Psicologos.update(
      {
        nome,
        email,
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

      if (!pacienteAtualizado) {
        return res.status(404).json("id não encontrado");
    };

      res.status(200).json("Psicologo atualizado com sucesso")
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