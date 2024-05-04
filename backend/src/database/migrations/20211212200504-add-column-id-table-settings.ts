import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.addColumn("Settings", "id", {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true // Definindo como uma chave única
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn("Settings", "id");
  }
};
