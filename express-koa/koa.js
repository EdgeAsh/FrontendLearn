var koa = require('koa');
var app = koa();

var asyncIo = function(){
	return new Promise(function(bc){
		setTimeout(function(){
			bc();
		},300)
	})
}

var mid = function (){
	return function *(next) {
		this.body = 'mark';
		yield next;
		this.body += ' done';
	}
} 


app.use(mid());
app.use(function *(next){
	yield asyncIo()
	this.body += ' saved';
	yield next;
})

app.listen(3000)