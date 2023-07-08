const express = require('express');
const VeiculoController = require('../controllers/veiculos.controller');

const router = express.Router();

router.get('/', VeiculoController.getAllVeiculos);
router.post('/', VeiculoController.criarVeiculo);
router.put('/:placa', VeiculoController.atualizarVeiculo);
router.delete('/:placa', VeiculoController.deletarVeiculo);

module.exports = router;
