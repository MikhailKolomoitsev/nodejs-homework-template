const productsOperations = require('../../models/products')

const getAll = async (req, res, next) => {
    const products = await productsOperations.getAll()
    res.json(products)
}

module.exports = getAll
