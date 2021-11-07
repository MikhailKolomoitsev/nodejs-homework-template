const express = require('express')

const { products: ctrl } = require('../../controllers')
const router = express.Router()
const { validation } = require('../../middlewares/index')
const { joiProductSchema } = require('../../validations')

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', validation(joiProductSchema), ctrl.add)

router.put('/:id', validation(joiProductSchema), ctrl.updateById)

router.delete('/:id', ctrl.deleteById)

module.exports = router
