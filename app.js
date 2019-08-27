require('dotenv').config();
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

const connectDB = require('./config/db');
const Profile = require('./models/Profile');

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

// load Routes
const profile = require('./routes/profile');

app.use('/profile', profile);

// MongoDB connection
connectDB();

app.get('/', (req, res) => {
    Profile.find({})
    .then(employees => {
        res.render('profile/index', {profile: employees});
    })
})

// Listening Port
const port = process.env.PORT || 5000;
// Setting server
app.listen(port, () => {
    console.log(`server is Running at port ${port}`);
})