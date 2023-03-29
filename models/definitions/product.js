const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/dbConnection");
class Product extends Model {}
Product.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(1200),
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    rating: {
      type: DataTypes.JSON,
      rate: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Product",
  }
);
module.exports = Product;
