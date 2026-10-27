const express = require('express')
const shopControllers = require('../controllers/shopControllers')

const router = express.Router()


router.get('/home', shopControllers.getHome)

module.exports = router
