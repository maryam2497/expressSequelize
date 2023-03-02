const {models} = require("../models/definitions")

module.exports = {
    createUsers: async function(body){

        const result = await models.User.create(body);
        return result;
    },
    getUser: async function(){

        const result = await models.User.findAll({
            include:models.Roles,
            attributes: {
        exclude: ['password']
      }
        });
        return result;
    },
    getUserById: async function(ids){

        const result = await models.User.findAll({
            where:{id:ids},
            include:models.Roles
        });
        return result;
    },
    updateUser: async function(body){
        
        const result = await models.User.update(
        {
        ...body
        },
        {
            where : {id: body.id}
        }
        );
        return result;
    },
    removeUser: async function(ids){
        
        const result = await models.User.destroy(
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