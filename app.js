const express = require('express');
const bodyParser = require('body-parser');
const etudiants_routes = require('./routes/etudiants.js')
const app = express();
const port = 5003;

app.listen(port, () => {
    console.log('Le server écoute le port 5003')
})

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());
app.use('/api/etudiants', etudiants_routes)