const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
    const products = await Contact.find({})
    res.json(products)
}

module.exports = getAll
