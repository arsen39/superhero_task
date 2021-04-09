const express = require('express');
const router = require('./routes');
const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use('/api', router);

module.exports = app;