const Sequelize = require("sequelize");
const db = require("../db");

const CartProduct = db.define("cart", {
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    },
});

module.exports = CartProduct;
