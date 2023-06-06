require('dotenv').config();
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({
        data: 'Servidor operacional',
    });
});

app.listen(8080, () => {
    console.log('Servidor funcionando!');
});
