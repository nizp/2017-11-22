let rename = t.$('#rename')[0],
remove = t.$('#remove')[0],
del = t.$('#del')[0],
create = t.$('#create')[0],
modalTree = t.$('.modal-tree')[0],
content = t.$('.content',modalTree)[0],
getId = -1,
treeMenu = t.$('.tree-menu')[0]


/*
    更换名字：
        1.先查看有没有选中,没有选中就提示
        2.把勾选的文件（input显示(聚焦),span隐藏）
        
*/
rename.onclick = function(){
    //foldersC就是页面中的文件夹
    checkFile(function(d,id){
        let dChild = d.children;
        dChild[1].style.display = 'block';
        dChild[1].focus();
        dChild[2].style.display = 'none';
        dChild[1].onblur = function(){
            let v = this.value.trim();
            //没有重复
            if(v){
                if(!t.reNameFn(id,v)){
                    data[id].title = v; 
                }else{
                    fullK('名字不能重复');
                }
            }
            num = -1;
            treeMenu.innerHTML = renderTree(-1);
            render(t.getParent(id).id*1);
        }
    },
    '请选择**一个**重命名文件',
    '请选择重命名文件'
    );
}

//删除文件
del.onclick = function(){
    checkFile(function(f,id){
        let tan = t.$('#tanbox')[0];
        let btns = t.$('.conf-btn a',tan);
        tan.style.display = 'block';
        //确定删除
        btns[0].onclick = function(){
            //找到pid为了渲染父级下的子级
            let pid = data[id].pid*1;
            //删除某个id下的所有子级（包括自己）
            t.getAllchilds(id);
            render(pid);
            num = -1;
            treeMenu.innerHTML = renderTree(-1);
            tan.style.display = 'none';
        }
        tan.children[0].onclick = btns[1].onclick = function(){
            tan.style.display = 'none';
        }
    },'请选择**一个**删除的文件','请选择删除的文件')
}

//新建文件夹

create.onclick = function(){
    let pid = t.$('span',breadNav)[0].dataset.index * 1;
    //创建一条数据
    let id = t.create(pid);
    if(t.reNameFn(id,'新建文件夹')){
        fullK('请修改新建文件夹这个名字!');
        delete data[id];
    }else{
        render(pid);
        num = -1;
        treeMenu.innerHTML = renderTree(-1);
    }
}


//移动到
remove.onclick = function(){
    let foldersChilds = Array.from(folders.children);
    if(foldersChilds.some(e=>e.classList.contains('hov'))){
        let f = foldersChilds.filter(e=>e.classList.contains('hov'))
        let d = f[0]; //需要操作的元素
        let id = d.dataset.index*1;
        modalTree.style.display = 'block';
        num = -1;
        content.innerHTML = renderTree(-1);
    }else{
        fullK('请选择要移动的文件夹');
    }
}

content.onclick = function(ev){
    if(ev.target.tagName === 'SPAN'){
        getId = 0;
        let id = ev.target.dataset.index * 1;
        getId = id;
        let trees = Array.from(t.$('.tree-title',content));
        trees.forEach(e=>e.style.background = '');
        ev.target.parentNode.style.background = '#ccc';
    }
}
/*
    有了移动的pid,把所有选中的pid，换成想要移动的pid就可以了
    
*/
t.$('.ok')[0].onclick = function(){
    //getId:pid
    let foldersChilds = Array.from(folders.children);
    let f = foldersChilds.filter(e=>e.classList.contains('hov'))
    f = f.map(e=>e.dataset.index*1);

    f.forEach(e=>t.changePid(e,getId));

    modalTree.style.display = 'none';
    num = -1;
    render(getId);
    treeMenu.innerHTML = renderTree(-1);
    renderNav(getId);
}






function checkFile(cb,t1,t2){
    //fullK('请选择正确的文件');
    let foldersChilds = Array.from(folders.children);
    if(foldersChilds.some(e=>e.classList.contains('hov'))){
        /*
            筛选出已经被选中的
        */
        let f = foldersChilds.filter(e=>e.classList.contains('hov'))
        if(f.length > 1){
            fullK(t1);
        }else{
            let d = f[0]; //需要操作的元素
            let id = d.dataset.index*1;
            cb(d,id);
        }
    }else{
        fullK(t2);
    }
}







