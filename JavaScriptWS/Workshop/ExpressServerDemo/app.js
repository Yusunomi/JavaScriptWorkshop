let express = require('express');

let app = express();

app.get('/',serveIndex);

function serveIndex(req, res){
	res.sendFile('index.html', {root: __dirname});
}
app.get('/about.html', serveAbout);

function serveAbout(req, res){
	res.sendFile('about.html', {root: __dirname});
}

app.listen(3000);
console.log('Server is Running On Port 3000');