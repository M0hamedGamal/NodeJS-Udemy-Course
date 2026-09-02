const express = require('express');

const app = express()

app.use('/users', (req, res, next) => {
    res.send('Welcome, in Users page!');
})
app.use('/', (req, res, next) => {
    res.send('Welcome, in Main page!');
})

app.listen(8000)