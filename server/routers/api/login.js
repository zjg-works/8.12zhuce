
const fs = require('fs');
function login(req, res, appUrl) {
    let allChunk = '';
    req.on('data', chunk => {
        allChunk += chunk;
    });

    req.on('end', ()=> {
        try {
            let data = JSON.parse(allChunk.toString());
            fs.readFile('./grade/person.json',  (err, localData) => {
                localData = JSON.parse(localData);
                let bool = Object.keys(data).every(k => {
                    return localData[k] === data[k];
                });
                let result = {
                    status: bool ? 0 : 1,
                    msg: bool ? '登录成功': '登录失败'
                };
                
                res.end(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err, '应该是你的数据格式有问题');
        }
    });
}

module.exports = login;