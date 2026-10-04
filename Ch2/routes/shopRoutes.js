const express = require('express');

const router = express.Router()

const shopControllers = require('../controllers/shopControllers');

// /products => GET
router.get('/products', shopControllers.getProducts)


// /products/123 => GET
router.get('/products/:id', shopControllers.getProductById)

// /cart => GET
router.get('/cart', shopControllers.getCart)

router.post('/cart', shopControllers.postCart)

router.delete('/cart/:id', shopControllers.deleteCartProduct)

// /orders => GET
router.get('/orders', shopControllers.getOrders)

// /checkout => GET
router.get('/checkout', shopControllers.getCheckout)

module.exports = router