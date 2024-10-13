// Node.js Application
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const responseData = {
        message: 'My name is Hayat',
        timestamp: Math.floor(Date.now())
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData)); // Minified JSON
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
