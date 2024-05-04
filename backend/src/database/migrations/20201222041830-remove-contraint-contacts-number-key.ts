module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Verifique se a restrição existe antes de tentar removê-la
    const indexes = await queryInterface.showIndex("Contacts");
    const indexNames = indexes.map(index => index.name);
    if (indexNames.includes("Contacts_number_key")) {
      return queryInterface.removeIndex("Contacts", "Contacts_number_key");
    } else {
      // Se a restrição não existir, continue sem fazer nada
      return Promise.resolve();
    }
  },

  down: (queryInterface, Sequelize) => {
    // Adicione a restrição sem verificar se ela existe primeiro (downgrades não devem falhar)
    return queryInterface.addIndex("Contacts", ["number"], {
      unique: true,
      name: "Contacts_number_key"
    });
  }
};
