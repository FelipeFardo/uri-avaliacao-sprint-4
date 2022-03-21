const { Model, DataTypes } = require('sequelize');

class Order extends Model {
    static init(sequelize) {
        super.init({
            id_user: DataTypes.INTEGER,
            id_flavors: DataTypes.INTEGER,
            obs: DataTypes.STRING
        }, {
            sequelize
        })
        
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
        this.hasMany(models.Flavor, { foreignKey: 'id_flavors', as: 'flavors' });
      }

}

module.exports = Order;