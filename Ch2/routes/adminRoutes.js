const express = require('express')

const router = express.Router()
const productControllers = require('../controllers/products')

// /admin/get-products => GET
router.get('/get-products', productControllers.getProducts)

// /admin/add-product => GET
router.get('/add-product', productControllers.getProduct)

// /admin/add-product => POST
router.post('/add-product', productControllers.addProduct)

module.exports = router