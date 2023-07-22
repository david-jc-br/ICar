// Importar o Sequelize e o arquivo de configuração do banco de dados (db)
const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Model Pessoa
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
}, {
    timestamps: false,
    freezeTableName: true,
    charset: 'utf8',
});

// Model Funcionário (Herança de Pessoa)
const Funcionario = db.define('funcionario', {
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
    },
    funcao: {
        type: DataTypes.ENUM('Atendente', 'Jurídico', 'RH'),
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
    charset: 'utf8',
});

// Model Cliente (Herança de Pessoa)
const Cliente = db.define('cliente', {
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
    },
    cnh: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
    charset: 'utf8',
});

// Model Aluguel
const Aluguel = db.define('aluguel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    dataLocacao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    dataDevolucao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    cpfCliente: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    placaVeiculo: {
        type: DataTypes.STRING(7),
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
    charset: 'utf8',
});

// Model Veículo
const Veiculo = db.define('veiculo', {
    placa: {
        type: DataTypes.STRING(7),
        primaryKey: true,
        allowNull: false,
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
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
    charset: 'utf8',
});

// Relacionamentos entre as tabelas
Pessoa.hasMany(Aluguel, { foreignKey: 'cpfCliente', sourceKey: 'cpf', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Aluguel.belongsTo(Pessoa, { foreignKey: 'cpfCliente', targetKey: 'cpf', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Pessoa.hasMany(Funcionario, { foreignKey: 'cpf', sourceKey: 'cpf', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Funcionario.belongsTo(Pessoa, { foreignKey: 'cpf', targetKey: 'cpf', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Pessoa.hasMany(Cliente, { foreignKey: 'cpf', sourceKey: 'cpf', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Cliente.belongsTo(Pessoa, { foreignKey: 'cpf', targetKey: 'cpf', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Aluguel.belongsTo(Veiculo, { foreignKey: 'placaVeiculo', targetKey: 'placa', onDelete: 'NO ACTION', onUpdate: 'CASCADE' });
Veiculo.hasMany(Aluguel, { foreignKey: 'placaVeiculo', sourceKey: 'placa', onDelete: 'NO ACTION', onUpdate: 'CASCADE' });

// Exportar os modelos
module.exports = {
    Pessoa,
    Funcionario,
    Cliente,
    Aluguel,
    Veiculo,
};
