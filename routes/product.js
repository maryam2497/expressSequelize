var express = require('express');
var router = express.Router();


const {addProducts,getProducts,getProductById, removeProducts} = require('../Controller/index');

router.post('/addProducts',addProducts);
router.get('/getProducts',getProducts);
router.get('/getProductById',getProductById);
router.delete('/removeProducts',removeProducts);
module.exports = router;
