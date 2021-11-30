const { User } = require('../../models')
const { NotFound } = require('http-errors')

const verify = async (req, res, next) => {
    const { verificationToken } = req.params
    const user = await User.findOne({ verificationToken })
    if (!user) {
        throw new NotFound()
    }
    await User.findByIdAndUpdate(user._id, { verificationToken: null, verify: true })
    res.json({
        message: 'Verify success'
    })
}

module.exports = verify
