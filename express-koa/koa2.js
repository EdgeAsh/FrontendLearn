const koa = require('koa');
const app = new koa();

const asyncIo = () => {
	return new Promise(bc => {setTimeout(()=>{bc()},3000)})
}


const mid = () => async (ctx,next)=>{
	ctx.body = 'mark';
	await next();
	ctx.body = ctx.body + ' done'
}

app.use(mid());
app.use(async(ctx,next)=>{
	await asyncIo();
	ctx.body += ' saved';
	await next()
})

app.listen(3000);