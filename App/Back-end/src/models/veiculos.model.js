const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Veiculos = db.define('Veiculo', {
    placa: {
        type: DataTypes.STRING(7),
        primaryKey: true,
        allowNull: false,
        unique:true,
    },
    modelo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    combustivel: {
        type: DataTypes.ENUM('Álcool', 'Gasolina', 'Flex', 'Elétrico'),
        allowNull: false,
    },
    disponibilidade: {
        type: DataTypes.ENUM('Disponível', 'Em Manutenção', 'Alugado'),
        allowNull: false,
    },
    cor: {
        type: DataTypes.ENUM('Branco', 'Preto', 'Vermelho', 'Azul', 'Prata'),
        allowNull: false,
    },
    valorDiaria: {
        type: DataTypes.DOUBLE(5, 2),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Veiculos;
