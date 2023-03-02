var express = require('express');
var router = express.Router();
const jwtSecret= require('../config.json')
const jwt= require('jsonwebtoken')
async function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}

const { createUsers, getUser, getUserById, updateUser, removeUser } = require('../Controller/index');
router.post('/createUsers',createUsers)
router.get('/getUser',authenticateToken,getUser)
router.get('/getUserById',getUserById)
router.put('/updateUser',updateUser)
router.delete('/removeUser',removeUser)
module.exports = router;
