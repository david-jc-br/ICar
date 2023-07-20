const AluguelService = require('../services/aluguel.services');

// Obter todos os aluguéis
const getAllAlugueis = async (req, res) => {
    try {
        const alugueis = await AluguelService.getAllAlugueis();
        res.json(alugueis);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obter aluguel por ID
const getAluguelById = async (req, res) => {
    const id = req.params.id;
    try {
        const aluguel = await AluguelService.getAluguelById(id);
        res.json(aluguel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Criar novo aluguel
const createAluguel = async (req, res) => {
    const { id, dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo } = req.body;
    try {
        const aluguel = await AluguelService.createAluguel(id, dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo);
        res.status(201).json(aluguel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Atualizar aluguel por ID
const updateAluguelById = async (req, res) => {
    const id = req.params.id;
    const { dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo } = req.body;
    try {
        const aluguel = await AluguelService.updateAluguelById(id, dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo);
        res.json(aluguel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Deletar aluguel por ID
const deleteAluguelById = async (req, res) => {
    const id = req.params.id;
    try {
        await AluguelService.deleteAluguelById(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    getAllAlugueis,
    getAluguelById,
    createAluguel,
    updateAluguelById,
    deleteAluguelById,
};
