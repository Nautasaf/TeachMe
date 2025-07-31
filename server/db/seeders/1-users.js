const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hash('hash', 10);
    
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Sadmin',
        email: 'sal@mail.ru',
        phoneNumber: '89373413994',
        password: hashPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Suser',
        email: 'suser@mail.ru',
        phoneNumber: '89373413995',
        password: hashPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
