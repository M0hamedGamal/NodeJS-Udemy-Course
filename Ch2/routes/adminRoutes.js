const express = require('express')

const router = express.Router()

const adminControllers = require('../controllers/adminControllers');

// /admin/add-product => GET
router.get('/add-product', adminControllers.getProduct)

// /admin/add-product => POST
router.post('/add-product', adminControllers.addProduct)

module.exports = router