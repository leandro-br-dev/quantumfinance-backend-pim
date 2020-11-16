'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TB_CLIENTE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TB_CLIENTE.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf_cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    dataRef: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    cidade: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    ativo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'TB_CLIENTE',
  });
  return TB_CLIENTE;
};