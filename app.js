const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('AM ISRAEL HAI!');    
});

module.exports = app;