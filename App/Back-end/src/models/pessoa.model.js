const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Pessoa = db.define('Pessoa', {
    nomeCompleto: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
        unique:true,
    },
    endereco: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
    },
    
}, {
    timestamps: false,
});

module.exports = Pessoa;
