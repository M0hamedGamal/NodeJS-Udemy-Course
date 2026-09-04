const Product = require('../models/Product');

const getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.status(200).send({products})
    })
}

const getCart = (req, res, next) => {}

const getOrders = (req, res, next) => {}

const getCheckout = (req, res, next) => {}

module.exports = {
    getProducts,
    getCart,
    getOrders,
    getCheckout,
}