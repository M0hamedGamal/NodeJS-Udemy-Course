const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const adminRoutes = require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes')
const notFoundRoutes = require('./routes/notFoundRoutes')

const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(notFoundRoutes)

app.listen(8000)
