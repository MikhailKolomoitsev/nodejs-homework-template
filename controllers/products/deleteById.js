const productsOperations = require('../../models/products')

const deleteById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productsOperations.removeById(id)
        if (!result) {
            throw new NotFound(`Product ${id} not found`)
        }
        res.status(201).json({
            status: 'success',
            code: 200,
            message: "Remove success"
        })
    } catch (error) {

    }
}

module.exports = deleteById