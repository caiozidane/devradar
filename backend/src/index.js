const express = require('express');
const MongoClient = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

MongoClient.set('useCreateIndex', true);

<<<<<<< HEAD
setupWebsocket(server);
=======
MongoClient.connect('mongodb+srv://caio:czbn12@cluster0-zduev.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
>>>>>>> d4ea5e4302ca8302e51e48cb3d3f8331376a24cd

MongoClient.connect('mongodb+srv://<user>:<password>@cluster0-efoe3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);