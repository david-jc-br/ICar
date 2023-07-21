const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Pessoa = require('./pessoa.model');

const Funcionario = db.define('funcionario', {
    funcao: {
        type: DataTypes.ENUM('Atendente', 'Jurídico', 'RH'),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
    },
}, {
    timestamps: false,
    freezeTableName: true,
    charset: 'utf8',
});

Funcionario.belongsTo(Pessoa, {
    foreignKey: 'cpf',
    onDelete: 'CASCADE'
});

Pessoa.hasOne(Funcionario, {
    foreignKey: 'cpf',
    onDelete: 'CASCADE'
});

module.exports = Funcionario;
