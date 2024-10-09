// Node.js Application
const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    const responseData = {
        message: 'My name is Hayat',
        timestamp: new Date().toISOString()
    };
    res.json(responseData);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});