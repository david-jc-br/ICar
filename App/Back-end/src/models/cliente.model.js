const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Cliente = db.define('Cliente', {
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
        unique:true,
    },
    cnh: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    
}, {
    timestamps: false,
});

module.exports = Cliente;
