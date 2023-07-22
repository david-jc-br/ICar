const {Aluguel, Pessoa, Veiculo}  = require('../models/icar.model');
const { ehValidoData, ehValidoCpf } = require('./pessoa.services');
const { ehValidoPlaca } = require('./veiculos.services');

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
const criarAluguel = async (dataLocacao, dataDevolucao, valor, cpfCliente, placaVeiculo) => {
    try {
        ehValidoData(dataDevolucao);
        ehValidoData(dataLocacao);
        ehValidoPlaca(placaVeiculo);
        ehValidoCpf(cpfCliente);

        // Verifica se a pessoa existe
        const pessoa = await Pessoa.findOne({ where: { cpf: cpfCliente } });
        if (!pessoa) {
            throw new Error('Pessoa com o CPF informado não encontrada');
        }

        // Verifica se o veículo existe
        const veiculo = await Veiculo.findOne({ where: { placa: placaVeiculo } });
        if (!veiculo) {
            throw new Error('Veículo com a placa informada não encontrado');
        }

        // Verifica se o veículo está disponível para aluguel
        if (veiculo.disponibilidade !== 'Disponível') {
            throw new Error('O veículo não está disponível para aluguel');
        }

        // Cria o novo aluguel
        const aluguel = await Aluguel.create({
            dataLocacao,
            dataDevolucao,
            valor,
            cpfCliente,
            placaVeiculo
        });

        // Atualiza o status do veículo para "Alugado"
        veiculo.disponibilidade = 'Alugado';
        await veiculo.save();

        return aluguel;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao criar aluguel: ' + error);
    }
};

// Atualizar aluguel por ID
const updateAluguelById = async (id, dataLocacao, dataDevolucao, valor, cnhCliente, placaVeiculo) => {
    try {
        ehValidoData(dataDevolucao);
        ehValidoData(dataLocacao);
        ehValidoPlaca(placaVeiculo);
        ehValidoCpf(cpfCliente);



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
    criarAluguel,
    updateAluguelById,
    deleteAluguelById,
};
