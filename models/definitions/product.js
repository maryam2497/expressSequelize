const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Product extends Model {};
Product.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        discription:{
            allowNull:false,
            type:DataTypes.STRING(),
        },

        productPrice:{
            allowNull:false,
            type:DataTypes.DOUBLE,
        },

        category:{
            allowNull:false,
            type:DataTypes.STRING(),
        },
        brand:{
            allowNull:false,
            type:DataTypes.STRING(),
        },
        url:{
            type:DataTypes.STRING(),
        }
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Product"
    }
)
module.exports = Product;