const express = require('express');

const router = express.Router()

const shopControllers = require('../controllers/shopControllers');

// /products => GET
router.get('/products', shopControllers.getProducts)

// /cart => GET
router.get('/cart', shopControllers.getCart)

// /checkout => GET
router.get('/checkout', shopControllers.getCheckout)

module.exports = router