import { QueryInterface, DataTypes } from "sequelize";
import { BusinessHours } from "../../utils/defaultConstants";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Tenants", "businessHours", {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: JSON.stringify(BusinessHours) // Convertendo o objeto para uma string JSON
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Tenants", "businessHours");
  }
};
