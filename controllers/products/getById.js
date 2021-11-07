const productsOperations = require('../../models/products')
const { NotFound } = require('http-errors')

const getById = async (req, res, next) => {
        const { id } = req.params
        const result = await productsOperations.getById(id)
        if (!result) {
            throw new NotFound(`Product ${id} not found`)
        }
        res.json({
            status: 'success',
            code: 200,
            data: { result }
        })

}

module.exports=getById