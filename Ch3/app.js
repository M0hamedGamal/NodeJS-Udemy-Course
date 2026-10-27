const express = require('express');
// const cors = require('cors');
const adminRouters = require('./routes/adminRoutes');
const shopRouters = require('./routes/shopRoutes');

const app = express()

// app.use( cors({
//     origin: "http://localhost:5173",
//     // methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//     // allowedHeaders: ['Content-Type', 'Authorization'],
//     // credentials: true
// }));

app.use('/admin', adminRouters)
app.use(shopRouters)

app.listen(8000, () => {
    console.log('Server is up and running!')
})