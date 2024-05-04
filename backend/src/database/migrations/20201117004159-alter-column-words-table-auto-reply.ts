module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("AutoReply", "words", {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("AutoReply", "words", {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
