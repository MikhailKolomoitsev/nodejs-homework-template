const express = require('express')
const { NotFound, BadRequest } = require('http-errors')
const Joi=require('joi')
const productsOperations = require('../../models/products')
const router = express.Router()
const {validation}=require('../../middlewares/index')
const {joiProductSchema}=require('../../validations')

router.get('/',
    async (req, res, next) => {
        console.log(req.body);
    try {
        const products = await productsOperations.getAll()
        res.json(products)
    } catch (error) {
        next(error)
        // res.status(500).json({
        //     status: 'error',
        //     code: 500,
        //     message: 'Server error'
        // })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productsOperations.getById(id)
        if (!result) {
            throw new NotFound(`Product ${id} not found`)
        }
        res.json({
            status: 'success',
            code: 200,
            data: { result }
        })
    } catch (error) {
        next(error)
    }
})

router.post('/', validation(joiProductSchema),
    async (req, res, next) => {
    try {
        const result = await productsOperations.add(req.body)
        res.status(201).json({
            status: 'success',
            code: 201,
            data: { result }
        })
    } catch (error) {
        next(error)
    }
})

router.put('/:id', validation(joiProductSchema), async (req, res, next) => {

    try {
        const { id } = req.params
        const result = await productsOperations.updateById(id, req.body)
        if (!result) {
            throw new NotFound(`Product ${id} not found`)
        }
        res.json({
            status: 'success',
            code: 200,
            data: { result }
        })
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productsOperations.removeById(id)
        if (!result) {
            throw new NotFound(`Product ${id} not found`)
        }
        res.status(201).json({
            status: 'success',
            code: 200,
            message: "Remove success"
        })
    } catch (error) {
        
    }
})

module.exports = router
