var express = require('express');
var router = express.Router();


const { createRole } = require('../Controller/index');


router.post('/createRole',createRole)
module.exports = router;