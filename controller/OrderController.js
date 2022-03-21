const Order = require('../models/Order');
const User = require('../models/User');
const Adress = require('../models/Adress');
const Flavor = require('../models/Flavor');

module.exports = {

    save: async function(req, res) {
        const order = new Order({
            id_user: req.body.id_user,
            id_flavors: req.body.id_flavors,
            obs: req.body.obs
        })

        try {
            const savedOrder = await order.save();
            res.send(savedOrder);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    list: async function(req, res) {
        const orders = await Order.findAll({
            include: [
            {
                model: User,
                as: "user",
                attributes: ['name', 'lastname'],
            },
            {
                model: Flavor,
                as: "flavors",
                attributes: ['name', 'price'],
            }],
            order: [
                ['user', 'name', 'ASC'],
                ['lastname', 'ASC'],
                ['id', 'ASC']
            ],
        });
        return res.json(orders)
    }

}