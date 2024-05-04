import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    // Verificar se a coluna fbPageId já existe na tabela Whatsapps
    const existingColumns = await queryInterface.describeTable("Whatsapps");
    if (existingColumns.hasOwnProperty("fbPageId")) {
      console.log("A coluna 'fbPageId' já existe na tabela 'Whatsapps'. Nenhuma ação necessária.");
      return Promise.resolve();
    }

    // Se a coluna fbPageId não existe, adicione-a
    return queryInterface.addColumn("Whatsapps", "fbPageId", {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Whatsapps", "fbPageId");
  }
};
