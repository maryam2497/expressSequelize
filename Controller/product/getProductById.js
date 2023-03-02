const productService = require('../../services/productService')
module.exports= async function(req,res){
    const data= await productService.getProductById(req.query.ids);
    res.send(data);
}