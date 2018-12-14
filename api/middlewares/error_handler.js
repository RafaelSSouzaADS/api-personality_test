const status = require('http-status');
const NotFound = require('../errors/not_found');
const BadRequest = require('../errors/bad_request');
const Unauthorized = require('../errors/unauthorized');

function error_handler(err, req, res, next) {
    if (err instanceof NotFound) {
        return res.status(status.NOT_FOUND).json(err);
    }
    if (err instanceof BadRequest) {
        return res.status(status.BAD_REQUEST).json(err);
    }
    if (err instanceof Unauthorized) {
        return res.status(status.UNAUTHORIZED).json(err);
    }
    if (err.name === 'MongoError') {
        return res.status(status.BAD_REQUEST).json(err.errmsg);
    }
    if (err.name === 'TokenExpiredError'){
        return res.status(status.BAD_REQUEST).json('token de acesso expirado');
    }
    if (err.name === 'JsonWebTokenError'){
        return res.status(status.BAD_REQUEST).json('token de acesso inválido');
    }
    if (err.name === 'JsonSchemaValidation'){
        return res.status(status.BAD_REQUEST).json('dados enviado inválido');
    }

    res.status(status.INTERNAL_SERVER_ERROR).json(err);
}

module.exports = error_handler;