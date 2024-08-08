const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'petsClinic',
    'root',
    '6037',
    {
    host:'localhost',
    dialect: 'mysql'

});

sequelize.authenticate().then(()=>{
    console.log('Database MySQL connected ')
}).catch((err)=>{
    console.log(` Database MySQL not connected ${err}`);
});


module.exports= sequelize ;