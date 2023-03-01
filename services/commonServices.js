const  commonModel = require('../models/commonModel')

module.exports={
    createRole:async function(body){
        const data = await commonModel.createRole(body);
        return data;
    },
}