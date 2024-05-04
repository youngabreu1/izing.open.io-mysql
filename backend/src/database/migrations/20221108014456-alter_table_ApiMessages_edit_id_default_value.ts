import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    // Nada a fazer aqui, já que a coluna 'id' já deve ser uma chave primária
    return Promise.resolve();
  },

  down: (queryInterface: QueryInterface) => {
    // Nada a fazer aqui, já que a coluna 'id' já deve ser uma chave primária
    return Promise.resolve();
  }
};
