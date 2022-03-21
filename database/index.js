const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Flavor = require('../models/Flavor');
const Adress = require('../models/Adress');
const Order = require('../models/Order');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(function () {
    console.log("Connected to MySQL!")
}).catch(function(err){
    console.log("Couldn't connect to MySQL: " + err)
})

User.init(connection);
Flavor.init(connection);
Adress.init(connection);
Order.init(connection);

module.exports = connection;