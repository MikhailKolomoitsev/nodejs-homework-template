const productsOperations = require('../../models/products')

const getAll = async (req, res, next) => {
    console.log(req.body);
    try {
        const products = await productsOperations.getAll()
        res.json(products)
    } catch (error) {
        next(error)
    }
}

module.exports = getAll