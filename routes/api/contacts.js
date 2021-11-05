const express = require('express')
const router = express.Router()
const {validation}=require('../../middlewares')
const { joiContactsSchema}=require('../../validations')

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', validation(joiContactsSchema), async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/:contactId', validation(joiContactsSchema), async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
