const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
    const {_id}=req.user
    const products = await Contact.find({owner: _id}).populate("owner", "_id email")
    res.json(products)
}

module.exports = getAll
