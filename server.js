const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));


const net = require('net');
const tcp_server = net.createServer();

tcp_server.on("connection",function(socket){
  console.log("CONNECTED: "+ sock.remoteAddress +':'+ sock.remotePort)
})

tcp_server.on('data', function(data) {
        
  console.log('DATA ' + sock.remoteAddress + ': ' + data);
  // Write the data back to the socket, the client will receive it as data from the server
  sock.write('You said "' + data + '"');
  
});

// Add a 'close' event handler to this instance of socket
tcp_server.on('close', function(data) {
  console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
});

tcp_server.listen(3000,()=>{console.log(`Listening on port 3000: net server`)})