const express = require('express');
const routers = require('./api/routers');
const morgan = require('morgan');
const logger = require('./api/winston');
const cors = require('cors');
const error_handler = require('./api/middlewares/error_handler');

const app = express();

app.use(morgan('tiny', { stream: logger.stream }));

app.use('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routers);

app.use(error_handler);

module.exports = app;