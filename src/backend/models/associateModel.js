const { User } = require('../models/userModel');
const {Product} = require('../models/productModel')

const setupAssociations = () => {
  User.hasMany(Product, { foreignKey: 'user_id' });
  Product.belongsTo(User, { foreignKey: 'user_id' });
};

module.exports = setupAssociations;