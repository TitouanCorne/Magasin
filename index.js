const path = require('path')
const db = require("./back/db.js")

const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.redirect(301, '/static/index.html')
})

app.get(encodeURI('/type'), (req, res) => {
    console.log(req.query)
    type = req.query["valeur"]
    db.model.Product.findAndCountAll({
        where: {
            type: type
        }
    }).then((data) => {
        console.log(data)
        res.json(data)  //on retourne les données : une liste d'objets
    })
})


app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("");

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);