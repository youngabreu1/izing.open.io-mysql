module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Verifique se a coluna 'number' não existe antes de tentar adicioná-la
    const columns = await queryInterface.describeTable("Whatsapps");
    if (!columns.number) {
      return queryInterface.addColumn("Whatsapps", "number", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      });
    } else {
      // Se a coluna 'number' já existir, continue sem fazer nada
      return Promise.resolve();
    }
  },

  down: (queryInterface, Sequelize) => {
    // Remova a coluna 'number'
    return queryInterface.removeColumn("Whatsapps", "number");
  }
};
