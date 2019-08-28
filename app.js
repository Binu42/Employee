// to make my password, api keys secure
require('dotenv').config();
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();

const connectDB = require('./config/db');
const Profile = require('./models/Profile');

// acquiring helpers to format date and truncate description
const {
    truncate,
    formatDate
} = require('./helper/hbs');

// Handlebar Middleware {defaultLayout: 'main'}
app.engine('handlebars', exphbs({
    helpers: {
        truncate: truncate,
        formatDate: formatDate
    },
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

// Body-Parser Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// To use static files like css, images
app.use(express.static("public"));

// MongoDB connection
connectDB();

// load Routes
const profile = require('./routes/profile');

// routing all /profile/* route to profile router
app.use('/profile', profile);


// route to get home page of website
app.get('/', (req, res) => {
    Profile.find({})
        .then(employees => {
            res.render('profile/index', {
                profile: employees
            });
        })
})

// Listening Port
const port = process.env.PORT || 5000;
// Setting server
app.listen(port, () => {
    console.log(`server is Running at port ${port}`);
})