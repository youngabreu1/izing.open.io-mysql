import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    try {
      await queryInterface.bulkInsert("Whatsapps", [
        {
          id: 1,
          session: "",
          qrcode: "",
          status: "DISCONNECTED",
          battery: "20",
          plugged: false,
          createdAt: "2021-03-11 23:23:17.000",
          updatedAt: "2022-08-09 22:54:09.133",
          name: "Whatsapp 01",
          isDefault: true,
          retries: 0,
          tenantId: 1,
          phone: JSON.stringify({}),
          number: "",
          isDeleted: false,
          type: "whatsapp",
          isActive: true
        },
        {
          id: 2,
          session: "",
          qrcode: "",
          status: "DISCONNECTED",
          battery: "20",
          plugged: false,
          createdAt: "2021-03-11 23:23:17.000",
          updatedAt: "2022-07-19 16:19:59.332",
          name: "Instagram 01",
          isDefault: false,
          retries: 0,
          tenantId: 1,
          phone: JSON.stringify({}),
          number: "",
          isDeleted: false,
          type: "instagram",
          isActive: true
        },
        {
          id: 3,
          session: "",
          qrcode: "",
          status: "DISCONNECTED",
          battery: "20",
          plugged: false,
          createdAt: "2021-03-11 23:23:17.000",
          updatedAt: "2022-07-19 15:55:28.096",
          name: "Telegram 01",
          isDefault: false,
          retries: 0,
          tenantId: 1,
          phone: JSON.stringify({}),
          number: "",
          isDeleted: false,
          type: "telegram",
          isActive: true
        }
      ]);
    } catch (error) {
      console.error("Erro ao inserir dados:", error);
      throw error;
    }
  },

  down: async (queryInterface: QueryInterface) => {
    try {
      await queryInterface.bulkDelete("Whatsapps", {});
    } catch (error) {
      console.error("Erro ao excluir dados:", error);
      throw error;
    }
  }
};
