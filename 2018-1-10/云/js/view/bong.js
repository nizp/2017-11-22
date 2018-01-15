
folders.onmousedown = function(ev){
    console.log(ev.pageY)
    t.$('.title a')[0].style.outline = 'none';
    t.$('.title a')[0].focus();
    //只在空白区域画框
    console.log(ev.target)
    if(ev.target!=this)return;
    let disX = ev.pageX;
    let disY = ev.pageY;

    let dragBox = t.el('div','kuang');
    dragBox.style.position = 'absolute';
    dragBox.style.left = disX + 'px';
    dragBox.style.top = disY - headH + 'px';
    folders.appendChild(dragBox);

    folders.onmousemove = function(ev){
        
        let ml = Math.min(disX,ev.pageX);
        let mt = Math.min(disY,ev.pageY);

        dragBox.style.width = Math.abs(ev.pageX - disX) + 'px';
        dragBox.style.height = Math.abs(ev.pageY - disY) + 'px';
        dragBox.style.left = ml + 'px';
        dragBox.style.top = mt - headH + 'px'; 

        let foldersChild = Array.from(folders.children);
        foldersChild = foldersChild.filter(e=>e!=dragBox);
        // console.log(foldersChild);
        for(let i=0;i<foldersChild.length;i++){
            //把自己排除
            // if(foldersChild[i] != dragBox){
                if(t.bong(dragBox,foldersChild[i])){
                    foldersChild[i].classList.add('hov');
                    foldersChild[i].children[3].classList.add('checked');
                    
                }else{
                    foldersChild[i].classList.remove('hov');
                    foldersChild[i].children[3].classList.remove('checked');
                }
            // }
        }
        checkall.className = foldersChild.every(e=>e.classList.contains('hov'))?'checked':'checkedAll';

        console.log(foldersChild);

        

    }

    document.onmouseup = function(){
        dragBox.remove();
        folders.onmousemove = document.onmouseup = null;
    }
    return false;
}