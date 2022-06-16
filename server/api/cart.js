const router = require("express").Router();
const { Cart, Product, CartProduct } = require("../db/models");
module.exports = router;
//get a user's cart
router.get("/:userId", async (req, res, next) => {
    try {
        const cart = await Cart.findOrCreate({
            where: {
                userId: req.params.userId,
                isCompleted: false,
            },
            include: Product,
        });
        res.json(cart);
    } catch (err) {
        next(err);
    }
});

//update a user's cart
router.post("/:userId/:productId", async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.productId);
        const [cart, created] = await Cart.findOrCreate({
            where: { userId: req.params.userId },
            isCompleted: false,
        });

        const cartProduct = await CartProduct.findOne({
            where: {
                cartId: cart.id,
                productId: product.id,
            },
        });
        if (cartProduct) {
            const updatedQty = cartProduct.item + 1;
            await cart.addProduct(product, {
                through: { quantity: updatedQty },
            });
        } else {
            await cart.addProduct(product, { through: { quantity: 1 } });
        }

        res.send(cart);
    } catch (err) {
        next(err);
    }
});

//remove a product from cart
router.delete("/:userId/:productId", async (req, res, next) => {
    try {
        const cart = await Cart.findByPk(req.params.cartId);
        const product = await Product.findByPk(req.params.productId);
        await cart.removeProduct(product);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

//update
router.put("/:userId/:productId", async (req, res, next) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        const product = await Product.findByPk(req.params.productId);
        await cart.removeProduct(product);
        res.send(cart);
    } catch (err) {
        next(err);
    }
});
