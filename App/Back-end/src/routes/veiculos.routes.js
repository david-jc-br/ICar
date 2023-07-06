const express = require('express');
const VeiculoController = require('../controllers/veiculos.controller');

const router = express.Router();

router.get('/', VeiculoController.getAllVeiculos);
router.post('/', VeiculoController.criarVeiculo);
router.put('/:id', VeiculoController.atualizarVeiculo);
router.delete('/:id', VeiculoController.deletarVeiculo);

module.exports = router;
