const Veiculo = require('../models/veiculos.model');

const getAllVeiculos = async () => {
    try {
        const veiculos = await Veiculo.findAll();
        return veiculos;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao pesquisar os veículos');
    }
};

const criarVeiculo = async (veiculoData) => {
    const { placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria } = veiculoData;
    try {
        const veiculo = await Veiculo.create({ placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria });
        return veiculo;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao criar um novo veículo');
    }
};

const atualizarVeiculo = async (placa, veiculoData) => {
    const { modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria } = veiculoData;
    try {
        const veiculo = await Veiculo.findByPk(placa);
        if (!veiculo) {
            throw new Error('Veículo não encontrado');
        }

        await veiculo.update({ placa, modelo, marca, ano, combustivel, disponibilidade, cor, valorDiaria });

        return veiculo;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar o veículo');
    }
};

const deletarVeiculo = async (placa) => {
    try {
        const veiculo = await Veiculo.findByPk(placa);
        await veiculo.destroy();
        return 'Veículo excluído com sucesso';
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao excluir o veículo');
    }
};

module.exports = {
    getAllVeiculos,
    criarVeiculo,
    atualizarVeiculo,
    deletarVeiculo,
};
