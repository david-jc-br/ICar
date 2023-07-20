const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Pessoa = require('./pessoa.model');

const Cliente = db.define('cliente', {
    cnh: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique:true,
    },

    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
        references: {
            model: Pessoa,
            key: 'cpf',
        },
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

Cliente.belongsTo(Pessoa, {
    foreignKey: 'cpf',
    onDelete: 'CASCADE'
});

Pessoa.hasOne(Cliente, {
    foreignKey: 'cpf',
    onDelete: 'CASCADE'
});

module.exports = Cliente;
