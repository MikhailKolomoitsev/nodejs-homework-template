const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

const deleteById = async (req, res, next) => {
    const { id } = req.params
    const result = await Contact.findByIdAndRemove(id)
    if (!result) {
        throw new NotFound(`Product ${id} not found`)
    }
    res.status(201).json({
        status: 'success',
        code: 200,
        message: 'Remove success'
    })
}

module.exports = deleteById
