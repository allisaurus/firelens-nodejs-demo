'use strict';

const express = require('express');

// App
const app = express();
const router = express.Router();


// Constants
const path = __dirname + '/views/';
const port = 8080;

router.use(function (req,res,next) {
	//console.log('/' + req.method);
	next();
});

// routes in the app
router.get('/', function(req,res){
	res.sendFile(path + 'index.html');
});

router.post('/form', function(req, res) {
	const info = req.body.message;
	console.log('LOGGED_MSG: ' + info);
	res.redirect('/');
});

app.use(express.static(path));
app.use(express.urlencoded());
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
})

// test func that omits a log every minute
function printTime() {
	let today = new Date();
	console.log("The time is: " + today.toTimeString());

	setTimeout(printTime, 60*1000);
}
printTime();