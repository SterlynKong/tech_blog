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
const hbs = exphbs.create({
    helpers: {
        format_date: date => {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
});

// express session
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    })
};

// register hbs.engine with express app
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.statis(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
});