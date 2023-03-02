const {models} = require("../models/definitions")
const jwtSecret= require('../config.json')
const jwt= require('jsonwebtoken')
let refreshTokens =[]

function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}

module.exports = {
    createRole: async function(body){
        // return body;
        const result = await models.Roles.create({...body});
        return result;
    },

    login: async function(body){  
        let User = await models.User.findOne({ 
            where:{
                userName: body.userName
                        }
    })
    if(!User){ 
        return "invalid userName/Password";
    }
    User = User.dataValues;
    const accessToken = generateAccessToken(User)
    const token= jwt.sign(User , jwtSecret.jwt.secret)
    refreshTokens.push(token)
    return({accessToken: accessToken, refreshToken:token})
    },

    logOut: async function(body){
        refreshTokens = refreshTokens.filter(token => token !== body.token)
        return({refreshToken: refreshTokens})
    }
    
}