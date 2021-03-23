const express = require('express');

const app = express();

const users = ["Raisa", "Nasir", "Limon", "Tuhin", "Elina", "Oni"]

const fruit = {
    product: "ada",
    price : 10
}

app.get("/fruits/banana", (req, res) => {res.send({product:" banana", quantity: 1000, price: 10000})})

app.get('/', (req, res) => res.send(fruit));

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})

app.listen(3000, () => console.log('Listening to port 3000'));