const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const { stringify } = require('querystring');
var bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))


app.set('views', __dirname, './public');
app.set("view engine", "ejs")

app.get('/', function(req, res) {
  res.render('index')
})

app.post('/api/score', function(req, res) {
    const url = req.body.url;
    var list = ['google', 'lemonde', 'figaro', 'parisien', 'afp', 'gouv.fr'];

    var arrayLenght = list.length
    for (var i = 0; i < arrayLenght; i++) {
        if(url.indexOf(list[i]) !== -1) {
            var result = Math.floor(Math.random() * 50) + 50
            break
        }
        else {
            var result = Math.floor(Math.random() * 100)
        }
    }
    res.send(JSON.stringify(result));
})

app.listen(3000, function () {
    console.log("Express server listening on port 3000");
    });
