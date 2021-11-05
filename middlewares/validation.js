const validation = (schema) => {
    const productValidation = (req, res, next) => {
        const { error } = schema.validate(req.body)
        if (error) {
            error.status = 404;
            next(error)
        }
        next()
    }
    return productValidation
}

module.exports = validation