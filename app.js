const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const postRoute = require('./routes/feed');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
})

app.use('/feed', postRoute);


app.listen(8080);



//Run app, then load http://localhost:3000 in a browser to see the output.