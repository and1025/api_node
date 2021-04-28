const express = require("express");
const http = require('http');
const app = express();
const PORT = 9000;
const products = require('./products/productController');


app.post('/products', function (req, res) {
  res.send('[POST]Saludos desde express');  
});

app.get('/products', function (req, res) {  
    res.set("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
  var product = products.productController("getProduct");
  res.send(product);
});

app.put('/products', function (req, res) {
    res.send('[PUT]Saludos desde express');
});

app.delete('/products', function (req, res) {
    res.send('[DELETE]Saludos desde express');
});

app.listen(PORT, () => {
 console.log("El servidor está inicializado en el puerto: " + PORT);
});
