const{DataTypes} = require("sequelize")
const db = require("../db/conection")


const Pet = db.define("Pets", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    species:{
        type: DataTypes.STRING,
        allowNull: false
    },
    carry:{
        type: DataTypes.STRING,
        allowNull: false
    },
    weigth:{
        type: DataTypes.INTEGER,
    },
    date_of_birth:{
        type: DataTypes.DATE,
        allowNull: false
    }
})