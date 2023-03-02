module.exports = {
  //role
  createRole: require('./common/role'),

  //users
  createUsers: require("./users/createUsers"),
  getUser: require("./users/getUser"),
  getUserById: require("./users/getUserById"),
  updateUser: require("./users/updateUser"),
  removeUser: require("./users/removeUser"),

  //products
  addProducts: require("./Product/addProducts"),
  getProducts: require("./Product/getProducts"),
  getProductById: require("./Product/getProductById"),
  removeProducts: require("./Product/removeProducts"),

  //login
  login:require("./common/login"),
  logOut:require("./common/logOut"),

}