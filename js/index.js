var data = [
    {
        username: 'namess',
        password: '',
        email: ''
    },
];

//数据
var data1 = [
    {
        name: '张三',
        faseGrade: 79
    },
    {
        name: '李四',
        faseGrade: 59
    },
    {
        name: '王五',
        faseGrade: 66
    },
    {
        name: '赵六',
        faseGrade: 98
    },
    {
        name: '孙七',
        faseGrade: 77
    },
    {
        name: '周八',
        faseGrade: 90
    },
    {
        name: '吴九',
        faseGrade: 55
    },
]

var login = document.getElementById('login');
//登录栏的用户名
var usname = document.getElementById('usname');
//登录栏里的密码
var pwds = document.getElementById('pwds');



// 注册
var register = document.getElementById('register');
// 切换页面相关
var contentWrap = document.getElementsByClassName('content-wrap')[0];
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right');
var line = document.getElementsByClassName('line')[0];
// 登录按钮
var login_btn = document.getElementById('login-btn');
// 注册按钮
var register_btn = document.getElementById('register-btn');
// console.log(register_btn);
// 注册里邮箱内容
var newEmail = document.getElementById('emails');
// console.log(newEmail.value);
// 注册里用户名
var newUserName = document.getElementById('names');
// 注册里密码
var newPassWord = document.getElementById('pwd');

//登录界面的遮罩层
var dialog = document.getElementById('dialog');
// 登录有的获取数据的按钮
var canvas_data = document.getElementById('get-canvas-data');








// 切换登录
login.addEventListener('click', function () {
    left.style = 'display:blockk;';
    right.style = 'display:none';
    login.classList.add('cur');
    register.classList.remove('cur');
    line.style = 'left:0;'
});
// 切换注册
register.addEventListener('click', function () {
    left.style = 'display:none;';
    right.style = 'display:block';
    register.classList.add('cur');
    login.classList.remove('cur');
    line.style = 'left:56px;'
});
// 邮箱正则
var emailReg = /^\w{1,11}@\w{1,11}(\.com|\.cn)$/;
// 用户名正则
var nameReg = /^[A-Z]{1}[a-z]{1,4}\d{11}$/;
//密码正则
// var passReg = /^.*\d+[a-z]+[\.|\_].*$/;
var passReg = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[\.|\_]).*$/;

// console.log(passReg.test('a1-11z4rf4f5g5fr4r4_jg.'));
// var pass = /^.*[a-b]+[1-9]+[\.|-]+.*$/
// console.log(pass.test('jg53-3406'));

// console.log(data[0].username == 'name');
var bool = null;

JSON.parse(localStorage.getItem('name'));
if (localStorage.getItem('name')) {
    usname.value = JSON.parse(localStorage.getItem('name'));
}

register_btn.addEventListener('click', function () {

    console.log(data);
    var a = {
        username: '',
        password: '',
        email: ''
    };
    //判断对象里是不是有这个key
    //Object.hasOwnProperty(key)
    data.filter(function (item) {

        bool = item.username == newUserName.value;
    });
    if (bool) {
        alert('用户名重复');
    } else {
        if (emailReg.test(newEmail.value)) {
            a.email = newEmail.value;

        } else {
            return alert('请输入正确邮箱格式');
        };
        if (nameReg.test(newUserName.value)) {
            a.username = newUserName.value;
        } else {
            return alert('请输入正确用户名格式');
        };
        if (passReg.test(newPassWord.value)) {
            a.password = newPassWord.value;
            data.push(a);

            left.style = 'display:blockk;';
            right.style = 'display:none';
            login.classList.add('cur');
            register.classList.remove('cur');
            line.style = 'left:0;'
            if (confirm('注册成功！是否保存用户名？')) {
                usname.value = newUserName.value;
                localStorage.setItem('name', JSON.stringify(newUserName.value));
            };
            newEmail.value = '';
            newUserName.value = '';
            newPassWord.value = '';

        } else {
            return alert('请输入6-8位密码');
        }
    }
});

//登录按钮点击事件
login_btn.addEventListener('click', function () {

    data.filter(function (item) {
        bool = item.username == usname.value && item.password == pwds.value;
    });
    if (bool) {
        dialog.style = 'display:none;'
    } else {
        alert('请输入正确的用户名和密码');
    }
});







var canvas = null;
var ctx = null;

canvas_data.addEventListener('click', function () {
    canvas_data.style = 'display:none;'
    setCanvas();
    lister();
    xuanran();
    // 鼠标移动事件
    canvas.addEventListener('mousemove', function (e) {
        ctx.clearRect(-50, -450, 500, 500);
        lister();
        xuanran(e)
    });
});


//创建canvas
function setCanvas() {
    canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.border = '1px solid #ccc';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    ctx.translate(50,450);
};


var newArr = JSON.parse(JSON.stringify(data1));

var max = newArr.sort(function (a, b) {
    return b.faseGrade - a.faseGrade;
})[0].faseGrade;



function color() {
    return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
};
// 声明颜色列表
var colors = [];
for (i = 0; i < data1.length; i++) {
    colors.push(color());
};


//表格

    function lister() {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -400);
        ctx.moveTo(0, 0);
        ctx.lineTo(400, 0);
        ctx.stroke();
        ctx.save();
        ctx.textAlign = 'end';
        ctx.textBaseline = 'middle';
        for (var i = 40; i <= 400; i += 40) {
            ctx.beginPath();
            ctx.moveTo(-3, -i);
            ctx.lineTo(3, -i);
            ctx.fillText((i / 4), 0, -i)
            ctx.stroke();
        }
        ctx.restore();
        ctx.save();
        ctx.textAlign = 'center';
        for (var j = 0; j <= data1.length - 1; j++) {
            ctx.beginPath();
            ctx.moveTo((400 / (data1.length + 1)) * (j + 1), 1);
            ctx.lineTo((400 / (data1.length + 1)) * (j + 1), -1);
            ctx.fillText(data1[j].name, (400 / (data1.length + 1)) * (j + 1), 20);
            ctx.fillText(data1[j].faseGrade, (400 / (data1.length + 1)) * (j + 1), -data1[j].faseGrade / 10 * 40 - 10);
            ctx.stroke();
        }
        ctx.restore();
    };


// 渲染柱状图
function xuanran(e) {
    for (var i = 0; i < data1.length; i++) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.rect((400 / (data1.length + 1)) * (i + 1) - 10, 0, 20, -data1[i].faseGrade / 10 * 40);
        ctx.fill();
        // 判断是不是在ctx内
        if (e && ctx.isPointInPath(e.offsetX, e.offsetY)) {
            ctx.fillStyle = 'red';
            ctx.fill();
            if (data1[i].faseGrade < 60) {
                ctx.save();
                ctx.fillStyle = 'black';
                ctx.fillText('不及格', e.offsetX - 50, (e.offsetY - 450));
                ctx.restore();
            } else if (data1[i].faseGrade < 80) {
                ctx.save();
                ctx.fillStyle = 'black';
                ctx.fillText('良好', e.offsetX - 50, (e.offsetY - 450));
                ctx.restore();
            } else {
                ctx.save();
                ctx.fillStyle = 'black';
                ctx.fillText('优秀', e.offsetX - 50, (e.offsetY - 450));
                ctx.restore();
            }
        }
        ctx.restore();
    };
};






