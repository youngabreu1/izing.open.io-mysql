import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query(
        'UPDATE Messages SET messageId = id;'
      )
    ]);
  },

  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query(
        'UPDATE Messages SET messageId = null;'
      )
    ]);
  }
};
