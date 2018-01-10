const breadNav = t.$('.bread-nav')[0];
const checkall = t.$('.checkall i')[0];
let num = -1;
/*
    <a href="javascript">微云</a>
	<span>我的音乐</span>
*/
renderNav(0);
//生成面包屑
function renderNav(id){
    let parents = t.getParents(id).reverse();
    let html = '';
    parents.forEach((e,i)=>{
        if(i === parents.length-1){ //最后一个加span
            html += `<span data-index="${e.id}">${e.title}</span>`;
        }else{
            //添加a
            html += `<a href="javascript:;" data-index="${e.id}">${e.title}</a>`
        }
    });
    breadNav.innerHTML = html;

    //点击面包屑
    breadNav.onclick = function(ev){
        let id = ev.target.dataset.index*1;
        renderNav(id);
        render(id); 
    }
}







