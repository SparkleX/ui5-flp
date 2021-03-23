const koaStatic = require("koa-static");
const Koa = require("koa");
const koaLogger = require("koa-logger");
const koaMount = require("koa-mount");
const jsonfile = require("jsonfile");
const fs = require("fs");
const bodyParser = require("koa-bodyparser");
var parse = require("co-busboy")

const app = new Koa();
app.use(koaLogger());
//app.use(bodyParser());

app.use(koaStatic("src"));
app.use(function* (next) {

	if (!this.request.is('multipart/*')) return yield next
	var parts = parse(this)
	var part
	while (part = yield parts()) {
		if (part.length) {
			// arrays are busboy fields
			console.log('key: ' + part[0])
			console.log('value: ' + part[1])
		} else {
			// otherwise, it's a stream
			part.pipe(fs.createWriteStream('some file.txt'))
		}
	}
	console.log('and we are done parsing the form!')
});


const port = process.env.PORT || 3000;
app.listen(port);
console.info(`server listen on port: ${port}`);