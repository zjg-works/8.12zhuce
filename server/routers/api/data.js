function postData(req, res) {
    let data = {
        status: 0,
        data: [
            {
                name: '小明',
                grade: 100,
            },
            {
                name: '小红',
                grade: 85,
            },
            {
                name: '小蓝',
                grade: 60,
            }, 
            {
                name: '小绿',
                grade: 70,
            }, 
            {
                name: '小黑',
                grade: 80,
            },
            {
                name: '小白',
                grade: 50,
            }
        ]
    }
    
    res.end(JSON.stringify(data));
}

module.exports = postData;