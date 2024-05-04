import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkUpdate(
      "Whatsapps",
      { status: "DISCONNECTED" },
      { status: "DESTROYED" }
    );
  },

  down: (queryInterface: QueryInterface) => {
    // Se o método "down" não for realmente necessário, você pode deixá-lo vazio ou remover esta função completamente.
    return Promise.resolve();
  }
};
