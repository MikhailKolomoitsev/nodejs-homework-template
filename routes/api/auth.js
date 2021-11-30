const express = require('express')

const { auth: ctrl } = require('../../controllers')
const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares')
const { joiSchema } = require('../../models/user')

const router = express.Router()

router.post('/signup', validation(joiSchema), controllerWrapper(ctrl.signup))
router.post('/login', validation(joiSchema), controllerWrapper(ctrl.login))
router.get('/logout', authenticate, controllerWrapper(ctrl.logout))
router.get('/current', authenticate, controllerWrapper(ctrl.current))
router.patch('/avatars', authenticate, upload.single('avatar'), controllerWrapper(ctrl.updateAvatar))
router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))

module.exports = router
