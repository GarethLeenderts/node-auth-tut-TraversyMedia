if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Import libraries
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // password hashing library
const passport = require('passport');
const methodOverride = require('method-override');


const initializePassport = require('./passport-config.js');
initializePassport(
    passport, 
    email => { return users.find(user => user.email === email) },
    id => { return users.find(user => user.id === id) },
);


// going to store users in a local variable for this tutorial
const users = []


// Instantiate server
const app = express();

// Middleware ---------

// Cors Middleware
var corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOptions));

// Allows us to parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));  alternate implementation

app.use(flash()); // used to display messages(used by passport)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 30000 },
})); // Session Middleware - like a cookie, but stored on the server(used by passport)
app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride('_method')); // used to override POST method from forms into a DELETE method
                                    // this is so that we can use html forms to make DELETE requests
                                    // Use in HTML form(/logout route example):
                                    // <form action="/logout?_method=DELETE" method="POST"></form>

// Middleware END --------


// ROUTE HANDLING //
app.post("/login", checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
}));

app.post("/register", checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        res.redirect("/login");
    } catch (error) {
        console.log(error);
        res.redirect("/register");
    }

    console.log(users);
    
});


app.delete('/logout', (req, res) => {
    req.logout(); // clears session and logs user out - set up by passport.js
    res.redirect('/login');
})
// ROUTE HANDLING END //



// Middleware to protect routes
const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    
    res.redirect('/login');
};

const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}


// Set Port and Connect
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));