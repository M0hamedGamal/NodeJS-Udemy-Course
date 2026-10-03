const Product = require('../models/Product');

const getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.status(200).send({products})
    })
}

const getProductById = (req, res, next) => {
    const id = req.params.id;

    Product.findById(id, (product) => {
        res.status(200).send(product)
    })
}

const addProduct = (req, res, next) => {
    const productObj = req.body.product

    const product = new Product(productObj)
    product.save()
    res.status(201).send({product})
}

const editProduct = (req, res, next) => {
    const id = req.params.id;

    const product = {id, ...req.body.product}

    const updatedProduct = new Product(product)
    updatedProduct.save()
    res.status(200).send({product: updatedProduct})
}

const deleteProduct = (req, res, next) => {
    const id = req.params.id;
    Product.delete(id, (product) => {
        res.status(200).send({product, message: 'Product deleted successfully.'})
    })
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProduct
}