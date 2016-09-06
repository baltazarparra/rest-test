'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var users = {
    joao: {
        nome: 'Joao',
        idade: 30
    },
    maria: {
        nome: 'Maria',
        idade: 22
    },
    eu: {
        nome: 'Eu',
        idade: 666
    }
}

app.get('/', function(req, res) {
    res.send('<h1>Home</h1>');
});

app.get('/user', function(req, res) {
    res.send('User');
});

app.get('/user/:username', function(req, res) {
    var username = req.params.username;
    if (users[username]) {
        return res.json(users[username]);
    }
    res.status(404).json({error: 'Not User'});
});

app.listen(3000);
