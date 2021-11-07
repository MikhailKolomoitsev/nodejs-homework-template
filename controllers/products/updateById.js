const productsOperations = require('../../models/products')

const updateById = async (req, res, next) => {

    try {
        const { id } = req.params
        const result = await productsOperations.updateById(id, req.body)
        if (!result) {
            throw new NotFound(`Product ${id} not found`)
        }
        res.json({
            status: 'success',
            code: 200,
            data: { result }
        })
    } catch (error) {
        next(error)
    }
}

    module.exports = updateById