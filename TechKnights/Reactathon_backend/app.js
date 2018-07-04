const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./server/routes/routes');
//require('./server/models');
//var mongoose = require('mongoose');
const app = express();
const mongoose = require('mongoose');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);
module.exports = app;

mongoose.connect('mongodb://localhost:27017/recruitportal');



