const express = require('express')

const router = express.Router()

const adminControllers = require('../controllers/adminControllers');

// /admin/add-product => POST
router.post('/add-product', adminControllers.addProduct)

// /admin/add-product => GET
router.get('/get-product/:id', adminControllers.getProductById)

// /admin/edit-product => GET
router.get('/edit-product/:id', adminControllers.editProductById)

module.exports = router