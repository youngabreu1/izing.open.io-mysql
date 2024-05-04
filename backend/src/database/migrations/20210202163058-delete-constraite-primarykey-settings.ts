module.exports = {
  up: (queryInterface, Sequelize) => {
    // Não é necessário remover a restrição no método 'up'
    return Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
    // Verifique se a restrição não existe antes de tentar adicioná-la
    return queryInterface.describeTable("Settings").then(attributes => {
      if (!attributes.hasOwnProperty("key")) {
        return queryInterface.addConstraint("Settings", ["key"], {
          name: "Settings_pkey",
          type: "unique"
        });
      }
    });
  }
};
