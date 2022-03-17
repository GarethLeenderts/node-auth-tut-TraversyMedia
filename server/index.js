// Import libraries
const express = require('express');
const cors = require('cors');

// Instantiate server
const app = express();

// Middleware ---------

// Cors Middleware
var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));

// Middleware END --------


// Set Port and Connect
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));