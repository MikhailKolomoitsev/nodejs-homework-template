const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
    const { page, limit } = req.query
    const skip = (page - 1) * limit
    const { _id } = req.user
    const products = await Contact.find({ owner: _id }, '_id email phone', { skip, limit: +limit }).populate('owner', '_id email')
    res.json(products)
}

module.exports = getAll
