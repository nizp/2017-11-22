function ajax(json){
    return new Promise((succ,fail)=>{
        var opt = {
            url:'',
            data:{},
            type:'get',
            dataType:'json',
            // success:function(){},
            // fail:function(){}
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

        function ready(){
            if(ajax.readyState === 4){//只能说可以接收到服务器的信息，但是不保证成功还是失败
                if(ajax.status >=200 && ajax.status <= 207 || ajax.status == 304){
                    if(opt.dataType === 'json'){
                        succ(JSON.parse(ajax.responseText));
                        // opt.success(JSON.parse(ajax.responseText));
                    }else if(opt.dataType === 'xml'){
                        // opt.success(ajax.responseXML);
                        succ(ajax.responseXML);
                    }else{
                        // opt.success(ajax.responseText);
                        succ(ajax.responseText);
                    }
                    
                }else{
                    // opt.fail(ajax.status);
                    fail(ajax.status);
                } 
            }
        }
    });
}