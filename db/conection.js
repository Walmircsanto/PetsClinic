const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'petsClinic',
    'root',
    '6037',
    {
    host:'localhost',
    dialect: 'mysql'

});

module.exports= sequelize ;