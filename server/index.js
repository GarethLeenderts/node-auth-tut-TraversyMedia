// Import libraries
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

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


// Set Port and Connect
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));