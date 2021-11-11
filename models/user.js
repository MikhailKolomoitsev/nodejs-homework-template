const { Schema, model } = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcryptjs')
const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: regExpEmail
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6
    },
    subscription: {
        type: String,
        enum: ['starter', 'pro', 'business'],
        default: 'starter'
    },
    token: {
        type: String,
        default: null,
    },
}, { versionKey: false, timestamps: true })

userSchema.methods.setPassword = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const joiSchema = Joi.object({
    email: Joi.string().pattern(regExpEmail).required(),
    password: Joi.string().min(6).required(),
    subscription: Joi.string(),
    token: Joi.string()
})

const User = model('user', userSchema)

module.exports = { User, joiSchema }