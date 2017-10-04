var express = require('express');
var app = express();

var asyncIo = function(bc){
	setTimeout(function(){
		bc()
		console.log('wan')
	},3000)
}

var mid = function(req,res,next){
	req.body = 'mark';
	next()
}

app.use(mid)
app.use(function(req,res,next){
	asyncIo(function(){
		req.body += ' saved';
		res.send(req.body+ ' done');
	})
})

app.listen(3000)