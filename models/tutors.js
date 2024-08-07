const{Sequelize,DataTypes} = require("sequelize")
const db = require("/db/conection")


const Tutor = db.define("tutor", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_birth:{
        type: DataTypes.DATE,
        allowNull: false
    },
    zip_code:{
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Tutor;