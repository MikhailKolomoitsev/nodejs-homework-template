const express = require('express')

const { auth: ctrl } = require('../../controllers')
const { validation, controllerWrapper } = require('../../middlewares')
const { joiSchema } = require('../../models/user')

const router = express.Router()

router.post('/signup', validation(joiSchema), controllerWrapper(ctrl.signup))
router.post('/login', validation(joiSchema), controllerWrapper(ctrl.login))

module.exports = router
