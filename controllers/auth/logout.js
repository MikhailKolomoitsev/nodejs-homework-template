const { User } = require('../../models')

const logout = async (req, res, next) => {
    const { _id } = req.user

    await User.findByIdAndUpdate(_id, { token: null })

    res.status(201).json({
        status: 'user logout',
        code: 204,
        data: 'No Content'
    })
}

module.exports = logout
