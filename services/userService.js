const bcrypt=require('bcrypt');
// const { models } = require('../models/definitions');
 const userModel= require('../models/userModel');

module.exports= {
createUsers: async function(body){
    body.password=await bcrypt.hashSync(body.password,10);
    const data = await userModel.createUsers(body);
    return data;
},
getUser: async function(){

    const result = await userModel.getUser();
    return result;
},
getUserById: async function(ids){
    const result = await userModel.getUserById(ids);
    return result;
},
updateUser: async function(body){

    const result = await userModel.updateUser(body);
    return result;
},
removeUser: async function(ids){

    const result = await userModel.removeUser(ids);
    return result;
},


}