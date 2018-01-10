const section = t.$('#section')[0];
const head = document.getElementById('head');
const fullTipBox = t.$('.full-tip-box')[0];
let headH = head.scrollHeight;
styleV();
window.onresize = styleV;

function styleV(){
    const iH = window.innerHeight;
    section.style.height = iH - headH + 'px';
}

/*
    提示框
*/
function fullK(title){
    fullTipBox.innerHTML = title;
    t.move({
        obj:fullTipBox,
        attrs:{
            top:0
        },
        d:500,
        cb:function(){
           setTimeout(function(){
                t.move({
                    obj:fullTipBox,
                    attrs:{
                        top:-40
                    },
                    d:400
                });
           },1000);
        }
    });
}