const express = require('express');
const MongoClient = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

MongoClient.set('useCreateIndex', true);

setupWebsocket(server);

MongoClient.connect('mongodb+srv://<user>:<password>@cluster0-efoe3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);