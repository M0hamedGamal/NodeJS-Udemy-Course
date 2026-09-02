const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userData = require('./routes/userRoutes')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);


app.use(userData.router)

app.listen(8000);