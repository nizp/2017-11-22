window.onload = function(){

    // 需求:
    // 1,点击开始btn,游戏开始
    // 2,表情随机往下落  Math.ceil()向上取整,Math.random()随机数,setInterval(),clearInterval(),
    // 3,点击表情左右抖动消失得分+1/没点中下落后窗口上下抖动失分+1,失分积满10分则游戏失败!!!

    //获取元素
    var btn=document.querySelector('.btn');
    var win=document.querySelector('.win');
    var lose=document.querySelector('.lose');
    var content=document.querySelector('.content');
    var wrap=document.querySelector('#wrap');
    var winNum=document.querySelector('.winNum');
    var loseNum=document.querySelector('.loseNum');
    var mark=document.querySelector('.mark');
    var more=document.querySelector('.choose span');

    var anim=['img/demon1.png','img/demonI.png','img/demonII.png','img/demonIII.png','img/demonIV.png','img/demonV.png'];
    var anim2=['img/demonVI.png'];
    var arr = [20,600];
    var xh = document.getElementById('xh');

    var winN=0; //得分
    var loseN=0; //失分
    let speed = 5000;
    let onOff = true;

    document.onmousedown = function(){ //按下事件
        return false;//阻止浏览器默认行为
    }


    btn.onclick = function(){
        init();
    }

    function init(){
        winN=0;
        loseN=0;
        speed = 5000;
        mark.style.display = 'none';
        loseNum.innerText = 0;
        winNum.innerText = 0;
        move({
            obj:btn,
            attrs:{
                bottom:-54,
                opacity:0
            },
            d:600,
            cb:function(){
                playGame();
            }
        });
        move({
            obj:win,
            attrs:{
                left:-106
            },
            d:500
        });
        move({
            obj:lose,
            attrs:{
                left:-106
            },
            d:500
        });
    };


    function playGame(){
        //创建小人,给随机left和图片
        xh.innerHTML = `<img 
            src="${anim[Random(anim,0,anim.length-1)]}"
            style="left:${Random(arr)}px;
            position:absolute;
            top:0";
            id="img"
        >`;

        const img = content.getElementsByTagName('img')[0];

        //点击加速度,抖动,抖动完，重新开始
        img.onclick = function(){
            if(!onOff)return;
            onOff = false;
            winNum.innerText = ++winN;
            speed -= 200;
            this.src = anim2[0];
            clearInterval(img.timerM);
            clearInterval(content.timer);//在点击小人的时候，关掉窗口抖。并且还原content的位置
            content.style.top = 0;
            shake({
                obj:img,
                callback:function(){
                    img.remove();
                    setTimeout(function(){
                        onOff = true;
                        playGame();
                    },300);
                }
            });
        }

        move({
            obj:img,
            attrs:{
                top:content.offsetHeight - 62
            },
            d:speed,
            cb:function(){
                shake({
                    obj:content,
                    callback:function(){
                        loseNum.innerText = ++loseN;
                        if(winN - loseN < 0){
                            mark.style.display = 'block';
                            img.remove();
                            move({
                                obj:btn,
                                attrs:{
                                    bottom:0,
                                    opacity:1
                                },
                                d:600
                            });
                            move({
                                obj:win,
                                attrs:{
                                    left:0
                                },
                                d:500
                            });
                            move({
                                obj:lose,
                                attrs:{
                                    left:0
                                },
                                d:500
                            });

                        }else{
                            setTimeout(function(){
                                onOff = true;
                                playGame();
                            },300);
                        }
                    },
                    attr:'top',
                    n:20
                });
            }
        });
    }

    more.onclick = function(){
        init();
    }

    function Random(arr,min,max){ //[10,20,30,40] 
        min = min || Math.min.apply('',arr) || 0;
        max = max || Math.max.apply('',arr);
        return Math.round(Math.random()*(max - min) + min);
    }

    

    
   


    

      

}