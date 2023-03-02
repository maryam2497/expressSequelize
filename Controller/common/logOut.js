const commonServices = require('../../services/commonServices')

module.exports= async function(req,res){
    const data= await commonServices.logOut(req.body);
    res.send(data);
}