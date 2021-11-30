const { User } = require('../../models')
const { Conflict } = require('http-errors')
const { nanoid } = require('nanoid')
const { sendMail } = require('../../helpers')
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
    const verificationToken = nanoid()
    const avatarURL = gravatar.url(email)
    const newUser = new User({ email, password, subscription, token, avatarURL, verificationToken })
    newUser.setPassword(password)

    await newUser.save()
    const mail = {
        to: email,
        subject: 'Confirm registration',
        html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}">Press here to verify your email email</a>`
    }
    await sendMail(mail)

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
