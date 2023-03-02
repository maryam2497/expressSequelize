const {models} = require("../models/definitions")

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

        const result = await models.Product.findAll({
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

}