// Import libraries
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // password hashing library


// going to store users in a local variable for this tutorial
const users = []


// Instantiate server
const app = express();

// Middleware ---------

// Cors Middleware
var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));

// Allows us to parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));  alternate implementation

// Middleware END --------


// ROUTE HANDLING //
app.post("/login", (req, res) => {});

app.post("/register", async (req, res) => {
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
// ROUTE HANDLING END //



// Set Port and Connect
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));