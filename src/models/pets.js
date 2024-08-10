const{DataTypes} = require("sequelize");
const db = require("../db/conection");
const tutor = require("../models/tutors");


const Pet = db.define("pets", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
    weight:{
        type: DataTypes.INTEGER,
    },
    date_of_birth:{
        type: DataTypes.DATE,
        allowNull: false
    }
});


module.exports = Pet;



