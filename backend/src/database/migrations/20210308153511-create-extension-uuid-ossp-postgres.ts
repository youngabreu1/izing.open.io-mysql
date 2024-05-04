import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    // Retornar uma promessa com uma instrução SELECT que não faz nada
    return queryInterface.sequelize.query("SELECT 1;");
  },

  down: (queryInterface: QueryInterface) => {
    // Retornar uma promessa com uma instrução SELECT que não faz nada
    return queryInterface.sequelize.query("SELECT 1;");
  }
};
