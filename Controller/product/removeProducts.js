const productService = require('../../services/productService')

module.exports = async function(req,res)
{
    const data = await productService.removeProducts(req.query.ids);
    res.send(data);
}