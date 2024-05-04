module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.describeTable("Tickets").then(attributes => {
        if (!attributes.tenantId) {
          return queryInterface.addColumn("Tickets", "tenantId", {
            type: Sequelize.INTEGER,
            references: { model: "Tenants", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
            allowNull: false,
            defaultValue: 1
          });
        }
      }),
      queryInterface.describeTable("Contacts").then(attributes => {
        if (!attributes.tenantId) {
          return queryInterface.addColumn("Contacts", "tenantId", {
            type: Sequelize.INTEGER,
            references: { model: "Tenants", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
            allowNull: false,
            defaultValue: 1
          });
        }
      }),
      queryInterface.describeTable("Queues").then(attributes => {
        if (!attributes.tenantId) {
          return queryInterface.addColumn("Queues", "tenantId", {
            type: Sequelize.INTEGER,
            references: { model: "Tenants", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
            allowNull: false,
            defaultValue: 1
          });
        }
      }),
      queryInterface.describeTable("Settings").then(attributes => {
        if (!attributes.tenantId) {
          return queryInterface.addColumn("Settings", "tenantId", {
            type: Sequelize.INTEGER,
            references: { model: "Tenants", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
            allowNull: false,
            defaultValue: 1
          });
        }
      }),
      queryInterface.describeTable("AutoReply").then(attributes => {
        if (!attributes.tenantId) {
          return queryInterface.addColumn("AutoReply", "tenantId", {
            type: Sequelize.INTEGER,
            references: { model: "Tenants", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
            allowNull: false,
            defaultValue: 1
          });
        }
      }),
      queryInterface.describeTable("Users").then(attributes => {
        if (!attributes.tenantId) {
          return queryInterface.addColumn("Users", "tenantId", {
            type: Sequelize.INTEGER,
            references: { model: "Tenants", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
            allowNull: false,
            defaultValue: 1
          });
        }
      }),
      queryInterface.describeTable("Whatsapps").then(attributes => {
        if (!attributes.tenantId) {
          return queryInterface.addColumn("Whatsapps", "tenantId", {
            type: Sequelize.INTEGER,
            references: { model: "Tenants", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
            allowNull: false,
            defaultValue: 1
          });
        }
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Tickets", "tenantId"),
      queryInterface.removeColumn("Contacts", "tenantId"),
      queryInterface.removeColumn("Queues", "tenantId"),
      queryInterface.removeColumn("Settings", "tenantId"),
      queryInterface.removeColumn("AutoReply", "tenantId"),
      queryInterface.removeColumn("Users", "tenantId"),
      queryInterface.removeColumn("Whatsapps", "tenantId")
    ]);
  }
};
