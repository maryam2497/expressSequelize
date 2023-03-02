const productService = require('../../services/productService')
const joi = require('joi');
module.exports= async function(req,res){
    const data= await productService.addProducts(req.body);
    res.send(data);
}