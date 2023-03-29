var express = require('express');
var router = express.Router();


const {addProducts,getProducts,getProductById, removeProducts, getBulkProducts,getProductByCategory} = require('../Controller/index');

router.post('/addProducts',addProducts);
router.post('/getBulkProducts',getBulkProducts);
router.get('/getProducts',getProducts);
router.get('/getProductById',getProductById);
router.delete('/removeProducts',removeProducts);
router.get('/getProductByCategory',getProductByCategory);

module.exports = router;
