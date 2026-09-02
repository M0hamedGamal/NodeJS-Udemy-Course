const express = require('express');

const router = express.Router();
let username = ''
router.get('/users', (req, res, next) => {
    const url = req.url
    const method = req.method
    console.log(username)
    res.status(200).send({username})
});

router.post('/create-user', (req, res, next) => {
    username = req.body.username
    res.status(201).send(`${username} is created successfully`)

});

module.exports = {
    router,
    username
}