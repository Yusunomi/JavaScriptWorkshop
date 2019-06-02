const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
	".html": "text/html",
	".jpeg": "image/jpeg",
	".jpg": "image/jpg",
	".png": "image/png",
	".js": "text/javascript",
	".css": "text/css"
};

function httpHandler(req, res){
	let urlObject = url.parse(req.url);
	let uri = urlObject.pathname;
	let fileName = path.join(process.cwd(), uri);
	console.log('Loading '+ uri);
	
	let stats;
	try{
		stats = fs.lstatSync(fileName);
		if(stats.isFile() ){
			serveFile(res, fileName);
		}
		else if (stats.isDirectory() ){
			serveIndex(res)
		}
		else{
			serveError();
		}
	}catch(e){
		fileNotFound(res);
	}
	/*res.statusCode = 200;
	res.setHeader("Content-Type","text/plain");
	res.end("Hello World\n");*/
}

function serveError(){
	res.statusCode = 500;
	res.setHeader("Content-Type", "text/plain");
	res.write('500 Internal Error');
	res.end();
}

function serveIndex(res){
	res.statusCode = 302;
	res.setHeader('Location', 'index.html');
	res.end();
}

function serveFile(res, fileName){
	let fileExtension = path.extname(fileName);
	let mimeType = mimeTypes[fileExtension];
	res.statusCode = 200;
	res.setHeader("Content-Type", mimeType);
	
	let fileStream = fs.createReadStream(fileName);
	fileStream.pipe(res);

	/*res.write(`200 ${mimeType} Found`);
	res.end();*/
}

function fileNotFound(res){
	res.statusCode = 404;
	res.setHeader("Content-Type","text/plain");
	res.write('404 Not Found.');
	res.end();
}

function serverMessage(){
	console.log(`Server running at http://${hostname}:${port}`);
}

const server = http.createServer(httpHandler);
server.listen(port,hostname, serverMessage);