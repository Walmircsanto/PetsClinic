const { Sequelize} = require('sequelize');


const sequelize = new Sequelize(
    'petsClinic',
    'root',
    '6037',
    {
    host:'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }

});

sequelize.authenticate().then(()=>{
    console.log('Database MySQL connected ')
}).catch((err)=>{
    console.log(` Database MySQL not connected ${err}`);
});


sequelize.sync({force:true}).then(r =>{
    console.log(`Database created ${r}`)
}).catch((err)=>{
    console.log(err)
});


module.exports= sequelize ;