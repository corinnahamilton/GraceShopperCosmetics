const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
    price: {
        type: Sequelize.DECIMAL(10, 2),
        validate: {
            min: 0,
            max: 1000,
        },
    },
    quantity: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Cart;

//use pennies solution
// change sequelize type to integers and use pennies then divide by 100 on front end
