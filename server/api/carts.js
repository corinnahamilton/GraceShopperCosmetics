const router = require("express").Router();
const { Cart, Product } = require("../db/models");
module.exports = router;

router.get("/:userid", async (req, res, next) => {
    try {
        const cart = await Cart.findOne({
            where: {
                id: req.params.id,
            },
            include: Product,
        });
        res.json(cart);
    } catch (err) {
        next(err);
    }
});

router.post("/:id/:productId", async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.productId);
        const [cart, created] = await Cart.findOrCreate({
            where: { id: req.params.id },
        });

        await cart.addProduct(product);

        res.send(cart);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id/:productId", async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.productId);
        await product.destroy();
        res.send(product);
    } catch (err) {
        next(err);
    }
});

router.put("/:id/:productId", async (req, res, next) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        const product = await Product.findByPk(req.params.productId);
        await cart.removeProduct(product);
        res.send(cart);
    } catch (err) {
        next(err);
    }
});
