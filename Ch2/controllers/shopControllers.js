const Product = require('../models/product');
const Cart = require('../models/cart');

const getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.status(200).send({products})
    })
}

const getProductById = (req, res, next) => {
    const id = req.params.id
    Product.findById(id, (product) => {
        res.status(200).send({product})
    })
}

const getCart = (req, res, next) => {
}

const postCart = (req, res, next) => {
    const productId = req.body.productId
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price)

    })
}

const getOrders = (req, res, next) => {
}

const getCheckout = (req, res, next) => {
}

module.exports = {
    getProducts,
    getProductById,
    getCart,
    postCart,
    getOrders,
    getCheckout,
}