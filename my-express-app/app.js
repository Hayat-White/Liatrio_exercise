// Node.js Application
// Import the express module
const express = require('express');
// Create an instance of an Express application
const app = express();
// Define a GET route for the root URL ('/')
app.get('/', (req, res) => {
    // Create a JSON response object with a message and the current Unix timestamp
    const responseData = {
        message: 'My name is Hayat',
        timestamp: Math.floor(Date.now())
    };
    res.setHeader('Content-Type', 'application/json'); // Set the Content-Type header to indicate that the response will be JSON
    res.send(JSON.stringify(responseData)); // Send the response with the JSON object, minified
});

const PORT = 80;
app.listen(PORT, () => { // Start the server and listen on the specified port, printing a message when the server starts
    console.log(`Server is running on http://localhost:${PORT}`);
});
