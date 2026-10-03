const fs = require('fs')
const path = require('path')
const dirPath = require('../util/path')
const Cart = require('../models/cart')

const localDBPath = path.join(dirPath, 'data', 'products.json')

const getProductFromLocalFile = async (callback) => {
    fs.readFile(localDBPath, (err, fileContent) => {
        if (err) {
            callback([])
        } else {
            callback(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {
    constructor(product) {
        this.product = product
    }

    save() {
        getProductFromLocalFile((products) => {
            if (this.product.id) {
                const productIndex = products.findIndex(product => product.id === this.product.id)
                const updatedProducts = [...products]

                updatedProducts[productIndex] = this.product

                fs.writeFile(localDBPath, JSON.stringify(updatedProducts), (err) => {
                    console.log(err)
                })
            } else {
                const id = Math.random().toString()
                const product = {id, ...this.product}

                products.push(product)

                fs.writeFile(localDBPath, JSON.stringify(products), (err) => {
                    console.log(err)
                })
            }
        })
    }

    static findById(id, callback) {
        getProductFromLocalFile((products) => {
            const product = products.find((product) => product.id === id)
            callback(product)
        })
    }

    static fetchAll(callback) {
        getProductFromLocalFile(callback)
    }

    static delete(id, callback) {
        getProductFromLocalFile((products) => {
            const deletedProduct = products.find(product => product.id === id)

            const updatedProducts = products.filter(product => product.id !== id)

            fs.writeFile(localDBPath, JSON.stringify(updatedProducts), (err) => {
                if (!err) {
                    Cart.deleteProduct(id, deletedProduct.price)
                    callback(deletedProduct)
                }
            })
        })

    }
}