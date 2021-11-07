const express = require('express')

const { products: ctrl } = require('../../controllers')
const router = express.Router()
const { validation, controllerWrapper } = require('../../middlewares/index')
const { joiProductSchema } = require('../../validations')

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:id', controllerWrapper(ctrl.getById))

router.post('/', validation(joiProductSchema), controllerWrapper(ctrl.add))

router.put('/:id', validation(joiProductSchema), controllerWrapper(ctrl.updateById))

router.delete('/:id', controllerWrapper(ctrl.deleteById))

module.exports = router
