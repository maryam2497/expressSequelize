const bcrypt=require('bcrypt');
 const productModel= require('../models/productModel');

module.exports= {
    addProducts: async function(body){
      
        const data = await productModel.addProducts(body);
        return data;
    },
    getProducts: async function(){

    const result = await productModel.getProducts();
    return result;
},

getProductById: async function(ids){
    const result = await productModel.getProductById(ids);
    return result;
},
removeProducts: async function(ids){

    const result = await productModel.removeProducts(ids);
    return result;
},
}