window.onload = function(){
	/*
		通过数据把结构生成出来。

		1.先生成一级菜单

		2.生成第二级菜单。

	*/
	const ul = document.getElementById('oUl');

	function render(arr){
		let str = '';
		arr.forEach((e,i) => {
			str += `<li>
				<span class="${e.child?'add':''}"></span>
				<div>${e.title}</div>`;
				if(e.child){ //有child就说明要继续生成ul和li
					//继续循环child
					str += `<ul>${render(e.child)}</ul>`;
				}
			str += `</li>`;
		});
		return str; 
	}

	ul.innerHTML = render(arr);

	/*
		3.找到所有的div,加上click

		4.打开有ul的盒子

		5.收起
			出了自己，别的兄弟全部的ul都收起
	*/

	const divs = Array.from(ul.getElementsByTagName('div'));

	divs.forEach(e=>{
		e.onclick = function(){
			const next = e.nextElementSibling; //ul
			const prev = e.previousElementSibling; //span
			if(next){
				if(next.style.display == 'block'){
					next.style.display = 'none';
				}else{
					next.style.display = 'block';
				}
				prev.classList.toggle('line');

				const parent = e.parentNode; //li
				const pp = parent.parentNode; //ul
				const lis = pp.children; //包括目标的父级的所有兄弟节点
				for(var i=0;i<lis.length;i++){
					if(lis[i] != parent){ //过滤父级
						//父级的兄弟级。
						const uls = lis[i].getElementsByTagName('ul'); //关闭他们
						for(var j=0;j<uls.length;j++){
							uls[j].style.display = 'none';
							uls[j].previousElementSibling.previousElementSibling.classList.remove('line');
						} 
					}
				}
			}
		}
	});
	
	










	
	

	




	// console.log(arr);

}