const Product = require('../models/Product');

const addProduct = (req, res, next) => {
    const productObj = req.body.product

    const product = new Product(productObj)
    product.save()
    res.status(201).send({product})
}

const getProductById = (req, res, next) => {
    const id = req.params.id;

    Product.findById(id, (product) => {
        res.status(200).send(product)
    })
}

const editProductById = (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    const product = req.body.product
    res.status(200).send({product})
}

module.exports = {
    addProduct,
    getProductById,
    editProductById
}