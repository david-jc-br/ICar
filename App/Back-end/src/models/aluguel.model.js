const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Cliente = require('./pessoa.model');
const Veiculo = require('./veiculo.model');


const Aluguel = db.define('aluguel', {
    id: {
        type: DataTypes.STRING(8),
        primaryKey: true,
        allowNull: false,
    },
    dataLocacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dataDevolucao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },

    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        foreignKey: true,
        references: {
            model: Cliente,
            key: 'cpf',
        },

    },

    placaVeiculo: {
        type: DataTypes.STRING(7),
        allowNull: false,
        foreignKey: true,
        references: {
            model: Veiculo,
            key: 'placa',
        },

    }
}, {
    timestamps: false,
    freezeTableName: true,
});

Aluguel.belongsTo(Cliente, {
    foreignKey: 'cpf',
    onDelete: 'CASCADE'
});

Aluguel.belongsTo(Veiculo, {
    foreignKey: 'placaVeiculo',
    onDelete: 'CASCADE'
});

module.exports = Aluguel;