export const sequelizeContent = (dialect) => {
    return `
const { Sequelize } = require('sequelize');

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '';
const port = process.env.DB_PORT || '3306';
const dbName = process.env.DB_NAME || 'mydb';

const sequelize = new Sequelize(dbName, user, password, {
  host: host,
  dialect: '${dialect}' || 'mysql',
  port: port || 3306,
  logging: false,
});

module.exports = sequelize;

`;
}