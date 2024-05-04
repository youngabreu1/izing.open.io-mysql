module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Verifique se a coluna 'queue' existe antes de tentar removê-la
    const columns = await queryInterface.describeTable("StepsReplyActions");
    if (columns.queue) {
      return queryInterface.sequelize.transaction(async (transaction) => {
        // Remova a coluna "queue"
        await queryInterface.removeColumn("StepsReplyActions", "queue", { transaction });

        // Adicione a coluna "queueId"
        await queryInterface.addColumn("StepsReplyActions", "queueId", {
          type: Sequelize.INTEGER,
          references: { model: "Queues", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "RESTRICT",
          defaultValue: null,
          allowNull: true
        }, { transaction });
      });
    } else {
      // Se a coluna 'queue' não existir, continue sem fazer nada
      return Promise.resolve();
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Verifique se a coluna 'queueId' existe antes de tentar removê-la
    const columns = await queryInterface.describeTable("StepsReplyActions");
    if (columns.queueId) {
      return queryInterface.sequelize.transaction(async (transaction) => {
        // Remova a coluna "queueId"
        await queryInterface.removeColumn("StepsReplyActions", "queueId", { transaction });

        // Adicione a coluna "queue"
        await queryInterface.addColumn("StepsReplyActions", "queue", {
          type: Sequelize.INTEGER,
          defaultValue: null,
          allowNull: true
        }, { transaction });
      });
    } else {
      // Se a coluna 'queueId' não existir, continue sem fazer nada
      return Promise.resolve();
    }
  }
};
