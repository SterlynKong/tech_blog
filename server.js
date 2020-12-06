// requirements
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

// create instance of express as app
const app = express();
const PORT = process.env.PORT || 3001;

// db connection
const sequelize = require('./config/connection');

// requirement for session storage and access
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create instance of handlebars
const hbs = exphbs.create({});

// register hbs.engine with express app
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');