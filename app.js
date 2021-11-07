const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
let DB_HOST = ''
if (process.env.DB_HOST) {
  DB_HOST = process.env.DB_HOST
} else {
  const db_host = require('./config')
  DB_HOST = db_host
}

const app = express()
app.use(cors())

app.get('/', (res, req) => {
  res.send('<h2>Homepage</h2>')
})

mongoose.connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful')
    app.listen(3000)
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })

// const productsRouter = require('./routes/api/products')
// const contactsRouter = require('./routes/api/contacts')

// const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

// app.use(logger(formatsLogger))
// app.use(express.json())

// app.use('/api/products', productsRouter)
// // app.use('/api/contacts', contactsRouter)

// app.use((req, res) => {
//   res.status(404).json({ message: 'Not found' })
// })

// app.use((err, req, res, next) => {
//   const { status = 500, message = 'Server error' } = err
//   res.status(status).json({ message })
// })

module.exports = app
