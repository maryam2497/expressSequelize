var express = require('express');
var router = express.Router();


const { createUsers, getUser, getUserById, updateUser, removeUser } = require('../Controller/index');


router.post('/createUsers',createUsers)
router.get('/getUser',getUser)
router.get('/getUserById',getUserById)
router.put('/updateUser',updateUser)
router.delete('/removeUser',removeUser)
module.exports = router;
