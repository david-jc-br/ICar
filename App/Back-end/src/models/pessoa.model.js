const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Pessoa = db.define('pessoa', {
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('Funcionário', 'Cliente'),
        allowNull: false,
        defaultValue: 'Cliente',
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
        freezeTableName: true,
    }
);

module.exports = Pessoa;
