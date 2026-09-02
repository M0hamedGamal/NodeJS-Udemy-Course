const express = require('express');

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('This is the main page!')
    res.send('<h1>Welcome to Express!</h1>')
})

module.exports = router