const { Pacientes } = require("../models");

const pacientesController = {
    async listarTodos(req, res){
        try{
            const listaDePacientes = await Pacientes.findAll();
    
            res.json(listaDePacientes);
        } catch(error){
            return res.status(500).json(`Ocorreu algum problema: ${error}`);
        }
    },

    async listarUm(req, res){
        try{
            const { id } = req.params;

            const paciente = await Pacientes.findOne({
                where: {
                    id,
                },
            });
    
            if (!paciente) {
                return res.status(404).json("id não encontrado");
            };

            res.status(200).json(paciente);
        } catch(error){
            return res.status(500).json(`Ocorreu algum problema: ${error}`);
        }
    },

    async cadastrar(req, res){
        try{
            const { nome, email, idade } = req.body;

            const novoPaciente = await Pacientes.create({
                nome, 
                email, 
                idade,
            });
    
            res.status(201).json(novoPaciente);
        } catch(error){
            return res.status(500).json(`Ocorreu algum problema: ${error}`);    
        }
    },

    async atualizar(req, res){
        try{
            const { id } = req.params;
            const { nome, email, idade } = req.body;
    
            await Pacientes.update(
                {
                    nome,
                    email,
                    idade,
                },
                {
                    where: {
                        id,
                    },
                }
            );

            const pacienteAtualizado = await Pacientes.findOne({
                where: {
                    id,
                },
            });
    
            if (!pacienteAtualizado) {
                return res.status(404).json("id não encontrado");
            };

            res.status(200).json(pacienteAtualizado);
        } catch(error){
            return res.status(500).json(`Ocorreu algum problema: ${error}`);
        }
    },

    async deletar(req, res){
        try{
            const { id } = req.params;

            const pacienteDeletado = await Pacientes.destroy({
                where: {
                    id,
                },
            });

            if (!pacienteDeletado) {
                return res.status(404).json("id não encontrado");
            };
    
            res.status(204).json();
        } catch(error){
            return res.status(500).json(`Ocorreu algum problema: ${error}`);
        }  
    },
};

module.exports = pacientesController;