const express = require('express')
const path = require('path')

const server = express()
const port = 8080

server.use(express.static('content'))

server.get('/chaka', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/chaka.html'));
});

server.get('/tech', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/commitee/tech.html'));
});

server.get('/apo', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/commitee/apo.html'));
});

server.get('/ce', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/commitee/ce.html'));
});

server.get('/ej', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/commitee/ej.html'));
});

server.get('/cc', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/commitee/cc.html'));
});

server.get('/legislative', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/commitee/legislative.html'));
});

server.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/content/index.html'));
});

server.listen(port, () => {
   console.log("listening now...")
});