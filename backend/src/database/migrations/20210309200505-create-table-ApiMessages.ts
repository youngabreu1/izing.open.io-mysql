import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("ApiMessages", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 // Gera um UUID v4 automaticamente
      },
      messageId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      externalKey: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      ack: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [12, 14]
        }
      },
      mediaName: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
      },
      timestamp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      sessionId: {
        type: DataTypes.INTEGER,
        references: { model: "Whatsapps", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      tenantId: {
        type: DataTypes.INTEGER,
        references: { model: "Tenants", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
        defaultValue: 1
      },
      messageWA: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: null
      },
      apiConfig: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: null
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("ApiMessages");
  }
};
