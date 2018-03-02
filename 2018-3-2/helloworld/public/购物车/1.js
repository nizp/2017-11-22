/*
    扩展需求:
        
        选择商品:
            有商品单价、商品总量，选择商品时总量减少

        购物车:
            单价、数量加减、总计
            增加减少数量，减到0就删除
            每减少一个，选择商品就增加一个
*/

const list = ul1.getElementsByTagName('li');

//刷新，有本地数据走本地数据，没有走[]
let arr = JSON.parse(localStorage.getItem('data')) || [];
render();

//数据变化就更新
window.addEventListener('storage',function(){
    arr = JSON.parse(localStorage.getItem('data'));
    render();
});

for(let e of list){
    e.onclick = function(){
        //没重复的就push
        if(!arr.includes(e.innerText)){
            arr.push(e.innerText);
            localStorage.setItem('data',JSON.stringify(arr))
            render();
        }
        //console.log(arr);
    }
}

/*
    删除
*/
ul2.onclick = function(ev){
    if(ev.target.tagName === 'LI'){
       arr = arr.filter(e=>e!=ev.target.innerText);
       localStorage.setItem('data',JSON.stringify(arr));
       render();
       //console.log(arr);
    }
}




function render(){
    let html = '';
    for(let i of arr.keys()){
        html += `<li>${arr[i]}</li>`;
    }
    ul2.innerHTML = html;
}