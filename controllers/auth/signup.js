const { User } = require('../../models')
const { Conflict } = require('http-errors')
// const bcrypt=require('bcryptjs')

const signup = async (req, res, next) => {
    const { email, password, subscription, token } = req.body
    const user = await User.findOne({ email })
    if (user) {
        throw new Conflict(`User with ${email} already exists`)
    }

    const newUser = new User({ email, password, subscription, token })
    newUser.setPassword(password)
    await newUser.save()
    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    // const newUser = User.create({ email, password, subscription, token })
    res.status(201).json({
        status: 'user created',
        code: 201,
        data: {
            "user": {
                "email": email,
                "subscription": subscription
            }
        }
    })
}

module.exports = signup
