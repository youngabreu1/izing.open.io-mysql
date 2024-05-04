import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return queryInterface.describeTable("ApiConfigs")
        .then(columns => {
          // Verifica se a coluna "id" já existe
          if (columns.hasOwnProperty("id")) {
            // Se a coluna "id" já existe, não faz nada
            console.log("A coluna 'id' já existe na tabela 'ApiConfigs'. Nenhuma ação necessária.");
            return Promise.resolve();
          } else {
            // Se a coluna "id" não existe, adiciona-a
            return queryInterface.addColumn("ApiConfigs", "id", {
              allowNull: false,
              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4
            }, { transaction: t });
          }
        });
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return queryInterface.removeColumn("ApiConfigs", "id", { transaction: t });
    });
  }
};
