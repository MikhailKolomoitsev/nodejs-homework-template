const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

const updateById = async (req, res, next) => {
        const { id } = req.params
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true})
        if (!result) {
            throw new NotFound(`Product ${id} not found`)
        }
        res.json({
            status: 'success',
            code: 200,
            data: { result }
        })
}

    module.exports = updateById