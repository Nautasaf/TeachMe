const express = require('express');
const serverConfig = require('./serverConfig');
const server = express();
const db = require("./db/models");

serverConfig(server);

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log('БД подключена успешно');
  } catch (error) {
    console.log('Ошибка подключения к БД', error);
  }
}

testConnection();

// Добавьте определение переменной PORT
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
});