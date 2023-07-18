const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Funcionario = db.define('Funcionario', {
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
        unique:true,
    },
    funcao: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
}, {
    timestamps: false,
});

module.exports = Funcionario;
