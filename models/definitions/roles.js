const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Roles extends Model {};
Roles.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },
        role:{
            allowNull:false,
            unique:true,
            type:DataTypes.STRING(),
        }
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize:sequelize,
        modelName:"Roles"

    }
)
module.exports = Roles;