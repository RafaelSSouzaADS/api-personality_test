/**
 * @swagger
 * definitions:
 *   ReadUser:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       role:
 *         type: string
 *         enum: [admin, user]
 */
const schema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            required: false
        },
        name: {
            type: 'string',
            required: false
        },
        email: {
            type: 'string',
            required: true
        },
        role: {
            type: 'string',
            required: false,
            enum: ['admin', 'user']
        }
    },
    additionalProperties: false
}

module.exports = schema;