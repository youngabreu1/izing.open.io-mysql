import { QueryInterface } from "sequelize";
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Settings', [
      {
        key: 'userCreation',
        value: 'disabled',
        createdAt: '2020-12-12 16:08:45.354',
        updatedAt: '2020-12-12 16:08:45.354',
        tenantId: 1,
        id: 1
      },
      {
        key: 'NotViewTicketsQueueUndefined',
        value: 'disabled',
        createdAt: '2020-12-12 16:08:45.354',
        updatedAt: '2020-12-12 16:08:45.354',
        tenantId: 1,
        id: 2
      },
      {
        key: 'NotViewTicketsChatBot',
        value: 'disabled',
        createdAt: '2020-12-12 16:08:45.354',
        updatedAt: '2020-12-12 16:08:45.354',
        tenantId: 1,
        id: 3
      },
      {
        key: 'DirectTicketsToWallets',
        value: 'disabled',
        createdAt: '2020-12-12 16:08:45.354',
        updatedAt: '2020-12-12 16:08:45.354',
        tenantId: 1,
        id: 4
      },
      {
        key: 'botTicketActive',
        value: '3',
        createdAt: '2020-12-12 16:08:45.354',
        updatedAt: '2022-07-01 21:10:02.076',
        tenantId: 1,
        id: 5
      },
      {
        key: 'ignoreGroupMsg',
        value: 'enabled',
        createdAt: '2022-12-16 16:08:45.354',
        updatedAt: '2022-12-16 21:10:02.076',
        tenantId: 1,
        id: 7
      },
      {
        key: 'rejectCalls',
        value: 'disabled',
        createdAt: '2020-12-12 16:08:45.354',
        updatedAt: '2020-12-12 16:08:45.354',
        tenantId: 1,
        id: 9
      },
      {
        key: 'callRejectMessage',
        value: 'As chamadas de voz e vídeo estão desabilitadas para esse WhatsApp, favor enviar uma mensagem de texto.',
        createdAt: '2020-12-12 16:08:45.354',
        updatedAt: '2020-12-12 16:08:45.354',
        tenantId: 1,
        id: 10
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Settings', null, {});
  }
};


