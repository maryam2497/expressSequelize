const {models} = require("../models/definitions");
var data= require("../data.json");
module.exports = {
    addProducts: async function(body){

        const result = await models.Product.create(body);
        return result;
    },
    getProducts: async function(){

        const result = await models.Product.findAll();
        return result;
    },
    getProductById: async function(ids){

        const result = await models.Product.findOne({
            where:{id:ids},
            // include:models.Roles
        });
        return result;
    },
    removeProducts: async function(ids){
        
        const result = await models.Product.destroy(
        {
          where: {id:ids}
        },
        );
        if(result){
                return "deleted"
        }
        return "failed";
    },
    getBulkProducts: async function(){

        const result = await models.Product.bulkCreate(data);
        return result;
    },
    getProductByCategory: async function(category){

        const result = await models.Product.findAll({
            where:{category:category},
        });
        return result;

},
}