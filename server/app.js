const http = require('http');

const {config} = require('./config');

const {routers} = require('./routers')

const app = http.createServer((req, res) => {
    if (req.url === 'facicon.ico') res.end();
    // 挂载路由
    routers(req, res);
});

app.listen(config.port, err => {
    err ? console.log(err) : console.log('success');
})