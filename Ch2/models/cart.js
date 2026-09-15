const fs = require('fs');
const path = require('path')
const dirPath = require('../util/path')

const localDBPath = path.join(dirPath, 'data', 'cart.json')

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(localDBPath, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}

            // Fetch all cart data
            if (!err) {
                cart = JSON.parse(fileContent)
            }

            // Update an existing one or add a new one
            const productIndex = cart.products.findIndex(product => {
                return product.id === id
            })

            const existingProduct = cart.products[productIndex]
            let updatedProduct

            if (existingProduct) {
                updatedProduct = {...existingProduct}
                updatedProduct.qty += 1
                cart.products = [...cart.products]
                cart.products[productIndex] = updatedProduct
            } else {
                updatedProduct = {id, qty: 1}
                cart.products = [...cart.products, updatedProduct]
                console.log({cart})
            }

            // Update totalPrice
            cart.totalPrice += +productPrice

            // Write a new cart
            fs.writeFile(localDBPath, JSON.stringify(cart), (err) => {
                if (err)
                    return console.error(err)
            })
        })
    }
}