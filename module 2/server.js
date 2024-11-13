const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'app' folder
app.use('/css', express.static(path.join(__dirname, 'app', 'css')));
app.use('/js', express.static(path.join(__dirname, 'app', 'js')));

// Serve 'index.html' at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

// Serve 'data.json' from 'app/models/'
app.get('/data.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'models', 'data.json'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
