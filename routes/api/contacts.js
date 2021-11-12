const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, controllerWrapper, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../models/contact')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:id', controllerWrapper(ctrl.getById))

router.post('/', authenticate, validation(joiSchema), controllerWrapper(ctrl.add))

router.put('/:id', validation(joiSchema), controllerWrapper(ctrl.updateById))

router.patch('/:id/favorite', validation(joiSchema), controllerWrapper(ctrl.updateStatusContact))

router.delete('/:id', controllerWrapper(ctrl.deleteById))

module.exports = router
