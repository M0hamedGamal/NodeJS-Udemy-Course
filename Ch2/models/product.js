const fs = require('fs')
const path = require('path')
const dirPath = require('../util/path')

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
            products.push(this.product)
            fs.writeFile(localDBPath, JSON.stringify(products), (err) => {
                console.log(err)
            })
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
}