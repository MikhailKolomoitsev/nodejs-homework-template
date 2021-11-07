const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())

app.get('/', (res, req) => {
  res.semd('<h2>Homepage</h2>')
})

const DB_HOST = 'mongodb+srv://Mikhail:E7AW5xRzhkPBjKhm@cluster0.v82oo.mongodb.net/db-contacts?retryWrites=true&w=majority'
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
