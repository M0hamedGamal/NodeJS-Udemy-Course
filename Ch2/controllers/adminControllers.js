const Product = require('../models/Product');

const getProduct = (req, res, next) => {
    const product = req.body.product
    res.status(200).send({product})
}

const addProduct = (req, res, next) => {
    const productObj = req.body.product

    const product = new Product(productObj)
    product.save()
    res.status(201).send({product})
}

module.exports = {
    getProduct,
    addProduct
}