const { User } = require('../../models')
const { BadRequest } = require('http-errors')
const jwt = require('jsonwebtoken')
const {SECRET_KEY} = process.env

const login = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !user.comparePassword(password)) {
        throw new BadRequest('Wrong email or password')
    }

    const payload = {
        id: user._id
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })

    res.status(201).json({
        status: 'user created',
        code: 201,
        data: {
            token: token,
            user: {
                email: email,
                subscription: user.subscription
            }
        }
    })
}

module.exports = login
