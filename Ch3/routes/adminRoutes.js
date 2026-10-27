const express = require('express')
const router = express.Router()
const adminControllers = require('../controllers/adminControllers')

router.get('/home', adminControllers.getHome)

module.exports = router