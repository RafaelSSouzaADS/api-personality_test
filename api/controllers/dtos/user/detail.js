/**
 * @swagger
 * definitions:
 *   DetailUser:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 */
const schema = {
    id: '/DetailUser',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true
        }
    },
    additionalProperties: false
}

module.exports = schema;