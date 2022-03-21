const { Model, DataTypes } = require('sequelize');

class Adress extends Model {
    static init(sequelize) {
        super.init({
            state: DataTypes.STRING,
            city: DataTypes.STRING,
            district: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            complement: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Adress;