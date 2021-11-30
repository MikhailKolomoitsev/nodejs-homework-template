const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID } = process.env
sgMail.setApiKey(SENDGRID)

const sendMail = async (data) => {
    const email = { ...data, from: 'bogdan.lyamzin.d@gmail.com' }
    await sgMail.send(email)
    return true
}

module.exports = sendMail
