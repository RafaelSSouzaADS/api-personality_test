const express = require('express')
const router = express.Router()
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    swaggerDefinition: {
        info: {
            version: 'v1',
            title: 'Personality Test',
            termsOfService: 'None',
            contact: {
                email: 'rafaelssouzaads@gmail.com'
            }
        },
        produces: ['application/json'],
        consumes: ['application/json'],
        securityDefinitions: {
            Bearer: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header'
            }
        }
    },
    apis: ['./api/controllers/*.js', './api/controllers/dtos/**/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

router.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = {
    router
}
