module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tenants', [
      {
        status: 'active',
        ownerId: null,
        createdAt: new Date('2021-03-10 17:28:29'),
        updatedAt: new Date('2021-03-10 17:28:29'),
        name: 'Empresa 01',
        businessHours: JSON.stringify([
          { day: 0, hr1: '08:00', hr2: '12:00', hr3: '14:00', hr4: '18:00', type: 'O', label: 'Domingo' },
          { day: 1, hr1: '08:00', hr2: '12:00', hr3: '14:00', hr4: '18:00', type: 'O', label: 'Segunda-Feira' },
          { day: 2, hr1: '08:00', hr2: '12:00', hr3: '14:00', hr4: '18:00', type: 'O', label: 'Terça-Feira' },
          { day: 3, hr1: '08:00', hr2: '12:00', hr3: '14:00', hr4: '18:00', type: 'O', label: 'Quarta-Feira' },
          { day: 4, hr1: '08:00', hr2: '12:00', hr3: '14:00', hr4: '18:00', type: 'O', label: 'Quinta-Feira' },
          { day: 5, hr1: '08:00', hr2: '12:00', hr3: '14:00', hr4: '18:00', type: 'O', label: 'Sexta-Feira' },
          { day: 6, hr1: '08:00', hr2: '12:00', hr3: '14:00', hr4: '18:00', type: 'O', label: 'Sábado' }
        ]),
        messageBusinessHours: 'Olá! Fantástico receber seu contato! No momento estamos ausentes e não poderemos lhe atender, mas vamos priorizar seu atendimento e retornaremos logo mais. Agradecemos muito o contato.'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tenants', null, {});
  }
};
