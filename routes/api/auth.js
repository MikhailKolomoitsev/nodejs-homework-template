const express = require('express')

const { auth: ctrl } = require('../../controllers')
const { validation, controllerWrapper } = require('../../middlewares')

const router = express.Router()

router.post('/users/signup', controllerWrapper(ctrl.register))

module.exports=router