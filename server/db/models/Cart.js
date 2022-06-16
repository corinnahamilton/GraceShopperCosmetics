const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
    // orderId: {
    //     type: Sequelize.STRING,
    // },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Cart;

//use pennies solution
// change sequelize type to integers and use pennies then divide by 100 on front end
