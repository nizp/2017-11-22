window.onload = function(){
	/*
		通过数据把结构生成出来。

		1.先生成一级菜单

		2.生成第二级菜单。

		3.
	*/
	const ul = document.getElementById('oUl');

	function render(arr){
		let str = '';
		arr.forEach((e,i) => {
			str += `<li>
				<span class="${e.child?'add':''}"></span>
				<div>${e.title}</div>`;
				if(e.child){ //有child就说明要继续生成ul和li
					//${render(e.child)}
					str += `<ul>`
						e.child.forEach((e2,i)=>{
							str += `<li>
							<span class="${e2.child?'add':''}"></span>
							<div>${e2.title}</div>`;
							str += '</li>';
						});
					str += `</ul>`;
				}
			str += `</li>`;
		});
		return str; 
	}

	ul.innerHTML = render(arr);


	







	
	

	




	// console.log(arr);

}