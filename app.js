//author: Randika Nonis

//import the http package
const http = require('http');

//create the http server
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello, Node.js server!');
});


//define port 3000
const PORT = 3000;

//get the server to listen
server.listen(PORT, ()=> {
	console.log('Server running at http://localhost:${PORT}/');
});
