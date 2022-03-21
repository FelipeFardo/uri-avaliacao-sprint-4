const Adress = require('../models/Adress');

module.exports = {
    save: async function(req, res) {
        const adress = new Adress({
            state: req.body.state,
            city: req.body.city,
            district: req.body.district,
            street: req.body.street,
            number: req.body.number,
            complement: req.body.complement
        })

        try {
            const savedAdress = await adress.save();
            res.send(savedAdress);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    list: async function(req, res) {
        const adresses = await Adress.findAll();
        return res.json(adresses)
    }
}