var koa = require('koa');
var app = koa();
var router = require('koa-router');
var mount = require('koa-mount');

var api = new router();

app.use(mount('/v1', api.middleware()));

api.get('/koa', function*(next) {

    this.body = yield teste();
});

function teste() {
    return new Promise((resolve, reject) => {
        resolve('hello world')
    })
}

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});