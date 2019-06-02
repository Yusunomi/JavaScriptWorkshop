const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const path = require('path');

function  httpHandler(req, res){
	let urlObject = url.parse(req.url);
	let uri = urlObject.pathname;
	let filename = path.join(process.cwd(), uri);
	console.log('Loading '+ uri);
	console.log(filename);

	/*res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end("Hello World\n");*/
}

function serveMessage(){
	console.log('Server running at htt[://$(hostname):${port}');
}

const server = http.createServer(httpHandler);
server.listen(port, hostname, serveMessage);
