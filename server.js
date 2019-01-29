const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'iVan'
    });
    //res.send('Hola Mundo');
});

app.get('/about', (req, res) => {

    res.render('about');
    //res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en puerto ${ port}`);
});