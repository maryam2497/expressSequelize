// module.exports = {
//      //users
//      createUsers: require("./users/createUsers"),
//      getUser: require("./users/getUser"),
//     //  getUserById: require("./users/getUserById"),
//     //  removeUser: require("./users/removeUser"),
//      updateUser: require("./users/updateUser"),
   
//      //roles
    
//      //products
   
//      addProduct: require("./products/addProduct"),
//      getProduct: require("./products/getProduct"),
//      getProductById: require("./products/getProductById"),
//      removeProduct: require("./products/removeProduct"),
//      updateProduct: require("./products/updateProduct"),
   
//      //orders
//      getOrder: require("./order/getOrder"),
//      getOrderById: require("./order/getOrderById"),
//      updateOrder: require("./order/updateOrder"),
//      removeOrder: require("./order/removeOrder"),
//    };

module.exports = {
  //role
  createRole: require('./common/role'),

  //users
  createUsers: require("./users/createUsers"),
  getUser: require("./users/getUser"),
  getUserById: require("./users/getUserById"),
  updateUser: require("./users/updateUser"),
  removeUser: require("./users/removeUser"),

}