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
			}
		}
	})
	
	










	
	

	




	// console.log(arr);

}