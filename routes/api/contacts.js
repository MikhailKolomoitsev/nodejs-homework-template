const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, controllerWrapper, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../models/contact')

const router = express.Router()

router.get('/', authenticate, controllerWrapper(ctrl.getAll))

router.get('/:id', authenticate, controllerWrapper(ctrl.getById))

router.post('/', authenticate, validation(joiSchema), controllerWrapper(ctrl.add))

router.put('/:id', authenticate, validation(joiSchema), controllerWrapper(ctrl.updateById))

router.patch('/:id/favorite', authenticate, validation(joiSchema), controllerWrapper(ctrl.updateStatusContact))

router.delete('/:id', authenticate, controllerWrapper(ctrl.deleteById))

module.exports = router
