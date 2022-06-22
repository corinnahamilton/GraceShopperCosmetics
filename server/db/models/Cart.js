const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  //   orderId: {
  //     type: Sequelize.STRING,
  //   },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});


module.exports = Cart;
