const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Cliente = require('./pessoa.model');
const Veiculo = require('./veiculo.model');


const Aluguel = db.define('aluguel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
    charset: 'utf8',
});

Cliente.hasMany(Aluguel, {
    foreignKey: 'cpf',
    onDelete: 'CASCADE',
});
Aluguel.belongsTo(Veiculo, {
    foreignKey: 'placaVeiculo',
    onDelete: 'CASCADE'
});

module.exports = Aluguel;