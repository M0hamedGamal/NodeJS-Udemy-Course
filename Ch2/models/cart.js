const fs = require('fs');
const path = require('path')
const dirPath = require('../util/path')

const localDBPath = path.join(dirPath, 'data', 'cart.json')

module.exports = class Cart {
    static addProduct(productId, productPrice) {
        fs.readFile(localDBPath, (err, data) => {

        })
    }

}