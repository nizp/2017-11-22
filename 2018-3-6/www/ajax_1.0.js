function ajax(json){
    var opt = {
        url:'',
        data:{},
        type:'get',
        dataType:'json',
        success:function(){},
        fail:function(){}
    }
    //有配置走配置，没配置走默认
    // Object.assign(opt,json);
    for(var attr in json){
        opt[attr] = json[attr];
    }
    var ajax = new XMLHttpRequest;

    //把对象转成字符串
    var arr = [];
    for(var attr in opt.data){
        arr.push(attr + '=' + opt.data[attr]);
    }
    opt.data = arr.join('&');
    
    if(opt.type == 'get'){
        ajax.open('get',opt.url+'?'+opt.data,true);
        ajax.onreadystatechange = ready;
        ajax.send();
    }else if(opt.type == 'post'){
        ajax.open('post',opt.url,true);
        ajax.onreadystatechange = ready;
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(opt.data);
    }
    // ajax.onload = function(){
    //     opt.success(ajax.responseText);
    // }
    /*
        onload只支持IE9以上浏览器
        onreadystatechange能监听ajax执行的步骤过程

        每完成一个步骤就会就会执行一次函数，每次执行
        函数都给你一个数字
        0-4  -> 5步,但是0是监听不到的
        数字4为步骤全部走完

        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
        4: 请求已完成，且响应已就绪

        如果把onreadystatechange放在send之前，那么可以多
        监听一步
    */
    function ready(){
        if(ajax.readyState === 4){//只能说可以接收到服务器的信息，但是不保证成功还是失败
            if(ajax.status >=200 && ajax.status <= 207){
                if(opt.dataType === 'json'){
                    opt.success(JSON.parse(ajax.responseText));
                }else if(opt.dataType === 'xml'){
                    opt.success(ajax.responseXML);
                }else{
                    opt.success(ajax.responseText);
                }
                
            }else{
                opt.fail(ajax.status);
            } 
        }
    }
}