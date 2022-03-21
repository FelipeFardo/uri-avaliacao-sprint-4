const Flavor = require('../models/Flavor');

module.exports = {
    save: async function(req, res) {
        const flavor = new Flavor({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        })

        try {
            const savedFlavor = await flavor.save();
            res.send(savedFlavor);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    list: async function(req, res) {
        const flavors = await Flavor.findAll();
        return res.json(flavors)
    }
}