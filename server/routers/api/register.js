const fs = require('fs');

function register(req, res, appUrl) {
    let allChunk = '';
    req.on('data', chunk => {
        allChunk += chunk;
    });

    req.on('end', ()=> {
        try {
            let data = JSON.parse(allChunk.toString());
            let newData = {
                email: data.newEmail,
                userName: data.newUserName,
                password: data.newPsw,
            }
            fs.writeFile('./grade/person.json', JSON.stringify(newData), err => {
               
                let result = {
                    status: 0,
                    msg: '注册成功'
                }
                res.end(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err, '你的数据格式有问题');
        }
    });

}

module.exports = register;