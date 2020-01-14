const express = require('express');

const app = express();

app.use(express.json());

//metodos http: get, put, post, delete
// query params: req.query(filtros, ordenação, paginação)
//route params: request.params(idenfificar recurso na adição ou remção)
//body: request.body (dados para criação ou alteração de registro)

app.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Funfou' });
});


app.listen(3333);