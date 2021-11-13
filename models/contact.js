const { Schema, model } = require('mongoose')
const Joi = require('joi')
const patternRegExp = /^[0-9]{10}$/
const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
        match: patternRegExp
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
}, {versionKey: false, timestamps: true}
)

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().pattern(patternRegExp),
    favorite: Joi.boolean()
})

const Contact = model('Contact', contactSchema)

module.exports = { Contact, joiSchema }
