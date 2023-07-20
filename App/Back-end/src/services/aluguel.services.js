const { Aluguel } = require('../models/aluguel.model');

// Obter todos os aluguéis
const getAllAlugueis = async () => {
    try {
        const alugueis = await Aluguel.findAll();
        return alugueis;
    } catch (error) {
        throw new Error('Erro ao obter aluguéis');
    }
};

// Obter aluguel por ID
const getAluguelById = async (id) => {
    try {
        const aluguel = await Aluguel.findOne({ where: { id } });
        if (aluguel) {
            return aluguel;
        } else {
            throw new Error('Aluguel não encontrado');
        }
    } catch (error) {
        throw new Error('Erro ao obter aluguel');
    }
};

// Criar novo aluguel
const createAluguel = async (id, dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo) => {
    try {
        const aluguel = await Aluguel.create({ id, dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo });
        return aluguel;
    } catch (error) {
        throw new Error('Erro ao criar aluguel');
    }
};

// Atualizar aluguel por ID
const updateAluguelById = async (id, dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo) => {
    try {
        const aluguel = await Aluguel.findOne({ where: { id } });
        if (aluguel) {
            await aluguel.update({ dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo });
            return aluguel;
        } else {
            throw new Error('Aluguel não encontrado');
        }
    } catch (error) {
        throw new Error('Erro ao atualizar aluguel');
    }
};

// Deletar aluguel por ID
const deleteAluguelById = async (id) => {
    try {
        const aluguel = await Aluguel.findOne({ where: { id } });
        if (aluguel) {
            await aluguel.destroy();
            return true;
        } else {
            throw new Error('Aluguel não encontrado');
        }
    } catch (error) {
        throw new Error('Erro ao deletar aluguel');
    }
};

module.exports = {
    getAllAlugueis,
    getAluguelById,
    createAluguel,
    updateAluguelById,
    deleteAluguelById,
};
