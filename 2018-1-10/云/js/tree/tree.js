/*
    渲染结构树

    1.先找到id对应的数据是否有pid，如果有pid说明
      pid对应的数据下有子级
    2.然后再找到pid下的所有子级，然后渲染

    .open i
*/
function renderTree(pid){
    num ++;
   // let pData = data[pid]; //父级对象
    let html = '';
    html += `<ul style="padding-left:${num*5}px">`;
    let arr = t.getchilds(pid);
    arr.forEach(e=>{
        let arr = t.getchilds(e.id);
        html += `<li>
            <div class="tree-title close">
                <span data-index="${e.id}" class="${arr.length?'open':''}">
                    <i></i>
                    ${e.title}
                </span>
            </div>
            ${renderTree(e.id)}
        </li>`;
    });
    html += '</ul>';
    return html;
}
treeMenu.innerHTML = renderTree(-1);

