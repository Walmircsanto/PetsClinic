const{DataTypes} = require("sequelize")
const db = require("../db/conection")
const Pet = require("../models/pets")

const Tutor = db.define("tutor", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
    },

});

Tutor.hasMany(Pet, {foreignKey:'idTutor'});
Pet.belongsTo(Tutor,{foreignKey:'idTutor'})


module.exports = Tutor;