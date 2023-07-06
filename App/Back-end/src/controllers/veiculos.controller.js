const VeiculoService = require('../services/veiculos.services');

const getAllVeiculos = async (req, res) => {
    try {
        const veiculos = await VeiculoService.getAllVeiculos();
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
    const { id } = req.params;
    const veiculoData = req.body;
    try {
        const veiculo = await VeiculoService.atualizarVeiculo(id, veiculoData);
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletarVeiculo = async (req, res) => {
    const { id } = req.params;
    try {
        await VeiculoService.deletarVeiculo(id);
        res.json({ message: 'Veículo excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllVeiculos,
    criarVeiculo,
    atualizarVeiculo,
    deletarVeiculo,
};
