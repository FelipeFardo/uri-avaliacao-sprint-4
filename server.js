require('./database');

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const userRouter = require('./routes/UserRouter');
const flavorRouter = require('./routes/FlavorRouter');
const adressRouter = require('./routes/AdressRouter');
const orderRouter = require('./routes/OrderRouter');

let port = 8080;

app.use('/user', userRouter);
app.use('/flavor', flavorRouter);
app.use('/adress', adressRouter);
app.use('/order', orderRouter)

app.listen(port, ()=>{
    console.log("Server running on port %s", port);
})