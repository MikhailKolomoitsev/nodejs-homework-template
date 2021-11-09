const { Schema, model } = require('mongoose')
const Joi = require('joi')
const pattern = /^[0-9]{10}$/
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
        match: pattern
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}
)

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().pattern(pattern),
    favorite: Joi.boolean()
})

const Contact = model('Contact', contactSchema)

module.exports = { Contact, joiSchema }
