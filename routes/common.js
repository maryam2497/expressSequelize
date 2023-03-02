var express = require('express');
var router = express.Router();


const { createRole, login, logOut } = require('../Controller/index');


router.post('/createRole',createRole)
router.post('/login', login)
router.post('/logOut', logOut)
module.exports = router;