'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const result = await queryInterface.bulkInsert('Users', [{
        name: 'Administrador',
        email: 'admin@izing.io',
        passwordHash: '$2a$08$/wEAiCcLkfGcnzxCQprgYeFryP7MCOIbjcpRlWTPY/EQ/ON.gI0qS',
        createdAt: '2020-11-07 17:28:29.832',
        updatedAt: '2022-11-04 17:14:32.711',
        profile: 'admin',
        tokenVersion: 0,
        tenantId: 1,
        lastLogin: '2022-11-03 01:35:12.607',
        lastLogout: '2022-08-04 00:04:21.060',
        isOnline: true,
        configs: JSON.stringify({
          filtrosAtendimento: {
            searchParam: "",
            pageNumber: 1,
            status: ["open", "pending"],
            showAll: true,
            count: null,
            queuesIds: [],
            withUnreadMessages: false,
            isNotAssignedUser: false,
            includeNotQueueDefined: true
          },
          isDark: false
        }),
        lastOnline: '2022-11-04 17:14:32.711',
        status: 'offline'
      }], {});

      console.log('Resultado da inserção:', result);

      return result;
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      const result = await queryInterface.bulkDelete('Users', null, {});

      console.log('Resultado da exclusão:', result);

      return result;
    } catch (error) {
      console.error('Erro ao excluir dados:', error);
      throw error;
    }
  }
};
