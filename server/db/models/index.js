//this is the access point for all things database related!

const db = require('../db');
const User = require('./User');
const Product = require('./Product');

//associations could go here!
User.belongsToMany(Product, { through: 'UserProduct' });
Product.belongsToMany(User, { through: 'UserProduct' });

module.exports = {
  db,
  User,
  Product,
};
