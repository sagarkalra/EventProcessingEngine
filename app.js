const express = require('express');
const logger = require('morgan');

const usersRouter = require('./config/routes/users');
const walletsRouter = require('./config/routes/wallets');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/wallets', walletsRouter);

module.exports = app;
