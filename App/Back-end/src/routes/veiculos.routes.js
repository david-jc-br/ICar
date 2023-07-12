const express = require('express');
const VeiculoController = require('../controllers/veiculos.controller');

const router = express.Router();

router.get('/', VeiculoController.getAllVeiculos);
router.get('/:placa', VeiculoController.getOneVeiculo);
router.post('/', VeiculoController.criarVeiculo);
router.put('/:placa', VeiculoController.atualizarVeiculo);
router.delete('/:placa', VeiculoController.deletarVeiculo);
router.get('/:placa', VeiculoController.getVeiculoPorPlaca);

module.exports = router;
