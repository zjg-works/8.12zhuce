const { URL } = require('url');
const { config } = require('../config');
const { POST } = require('./allAPI.js');

function routers(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    // 接受任意域名的请求
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    // 表明服务器支持的所有头信息字段
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // 用来列出浏览器的CORS请求会用到哪些HTTP方法


    // 解析URL
    const appUrl = new URL(`${config.host}:${config.port}` + decodeURIComponent(req.url));
    res.writeHeader(200, {'Content-type': 'text/json;charset=UTF-8'});
    if (req.method === 'GET') {

    } else {
        POST[appUrl.pathname] ? POST[appUrl.pathname](req, res, appUrl) : res.end(JSON.stringify({status: '404', msg: '飞到外太空了'}));
    }
}

module.exports = {
    routers
};
