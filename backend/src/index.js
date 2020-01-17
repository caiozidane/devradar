const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://caio:czbn12@cluster0-zduev.mongodb.net/week10?retryWrites=true&w=majority',{
    userNameUrlParser: true,
    userUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//metodos http: get, put, post, delete
// query params: req.query(filtros, ordenação, paginação)
//route params: request.params(idenfificar recurso na adição ou remção)
//body: request.body (dados para criação ou alteração de registro)



