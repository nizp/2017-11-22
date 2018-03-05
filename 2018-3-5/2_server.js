const http = require('http');//引入http模块

const server = http.createServer((request,response,next)=>{
    //请求:request （接收客户端的信息）
    //响应:response（发送给客户端信息）
    console.log('启动');
    console.log(request.url);
    let arr = [1,2];
    arr.push(3);
    console.log(arr);
    /*
        write和end是一对,写了write必须写end
    */
    response.write('<div>hello,world</div>');
    response.end();
});

server.listen(80);


// console.log(http);