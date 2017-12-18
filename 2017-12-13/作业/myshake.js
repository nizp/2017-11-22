function shake(json={}){ //配置
    //默认
    let opt = {
        callback:function(){},
        attr:'left',
        n:10,
        obj:null
    }
    // 有配置走配置，没配置走默认
    Object.assign(opt,json);

    //console.log(opt);

    let arr = [];
    let num = 0;
    let timer = null;
    for(var i=opt.n;i>0;i-=2){
        arr.push(-i,i);
    }
    arr.push(0);
    clearInterval(timer);
    timer = setInterval(function(){
        opt.obj.style[opt.attr] = parseInt(getComputedStyle(opt.obj)[opt.attr]) + arr[num] + 'px';
        num ++;
        if(num >= arr.length){
            clearInterval(timer);
            num = 0;
            opt.callback && opt.callback();//钩子函数
        }
    },30); 
}