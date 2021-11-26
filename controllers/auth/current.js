const User = require('../../models/user')
const { Unauthorized } = require('http-errors')

const current = async (req, res, next) => {
    try {
        const { _id } = req.user
        const user = await User.findById(_id)
        if (!user) {
            throw new Unauthorized()
        }
        res.json({
            status: 'success',
            code: 200,
            result: user,
        })
    } catch (error) {
        next(error.message)
    }
}
module.exports = current
