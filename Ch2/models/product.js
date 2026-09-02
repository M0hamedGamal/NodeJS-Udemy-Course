const fs = require('fs')
const path = require('path')
const dirPath = require('../util/path')

const localDBPath = path.join(dirPath, 'data', 'products.json')

module.exports = class Product {
    constructor(product) {
        this.product = product
    }

    save() {
        let products = []
        fs.readFile(localDBPath, (err, fileContent) => {
            if (!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this.product)
            console.log(products)

            fs.writeFile(localDBPath, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll() {
        return products
    }
}