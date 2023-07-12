const VeiculoService = require('../services/veiculos.services');

const getAllVeiculos = async (req, res) => {
    try {
        const veiculos = await VeiculoService.getAllVeiculos();
        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOneVeiculo = async (req, res) => {
    try {
        const {placa} = req.params; 
        const veiculos = await VeiculoService.getOneVeiculo(placa);
        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const criarVeiculo = async (req, res) => {
    const veiculoData = req.body;
    try {
        const veiculo = await VeiculoService.criarVeiculo(veiculoData);
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const atualizarVeiculo = async (req, res) => {
    const { placa } = req.params;
    const veiculoData = req.body;
    try {
        const veiculo = await VeiculoService.atualizarVeiculo(placa, veiculoData);
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletarVeiculo = async (req, res) => {
    const { placa } = req.params;
    try {
        await VeiculoService.deletarVeiculo(placa);
        res.json({ message: 'Veículo excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getVeiculoPorPlaca = async (req, res) => {
    const { placa } = req.params;
    try {
        const veiculo = await VeiculoService.getVeiculoPorPlaca(placa);
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllVeiculos,
    getOneVeiculo,
    criarVeiculo,
    atualizarVeiculo,
    deletarVeiculo,
    getVeiculoPorPlaca,
};
