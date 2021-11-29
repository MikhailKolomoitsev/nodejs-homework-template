const { User } = require('../../models')
const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const fs = require('fs/promises')
const path = require('path')

const avatarsDir = path.join(__dirname, '../../public/avatars')

const signup = async (req, res, next) => {
    const { email, password, subscription, token } = req.body
    const user = await User.findOne({ email })
    if (user) {
        throw new Conflict(`User with ${email} already exists`)
    }
    const avatarURL = gravatar.url(email)
    const newUser = new User({ email, password, subscription, token, avatarURL })
    newUser.setPassword(password)
    await newUser.save()

    const userFolder = path.join(avatarsDir, String(newUser._id))
    await fs.mkdir(userFolder)
    res.status(201).json({
        status: 'user created',
        code: 201,
        data: {
            user: {
                email: email,
                subscription: subscription,
                avatar: avatarURL
            }
        }
    })
}

module.exports = signup
