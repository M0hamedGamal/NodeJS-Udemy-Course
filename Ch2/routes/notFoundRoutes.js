const express = require('express')
const notFoundController = require('../controllers/error')

const notFoundRouter = express.Router()

notFoundRouter.use(notFoundController.errorNotFound)


module.exports = notFoundRouter

