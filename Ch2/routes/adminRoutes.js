const express = require('express')

const router = express.Router()

const adminControllers = require('../controllers/adminControllers');

// /admin/products => GET
router.get('/products', adminControllers.getProducts)

// /admin/add-product => POST
router.post('/add-product', adminControllers.addProduct)

// /admin/get-product/:id => GET
router.get('/get-product/:id', adminControllers.getProductById)

// /admin/edit-product/:id => POST
router.post('/edit-product/:id', adminControllers.editProduct)

// /admin/edit-product/:id => POST
router.delete('/delete-product/:id', adminControllers.deleteProduct)

module.exports = router