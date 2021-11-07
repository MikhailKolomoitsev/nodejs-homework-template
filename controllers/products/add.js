const productsOperations = require('../../models/products')
const add = async (req, res, next) => {
    try {
        const result = await productsOperations.add(req.body)
        res.status(201).json({
            status: 'success',
            code: 201,
            data: { result }
        })
    } catch (error) {
        next(error)
    }
}

module.exports=add