window.onload = function(){
	/*
		通过数据把结构生成出来。

		1.先生成一级菜单

		2.生成第二级菜单。
	*/
	const ul = document.getElementById('oUl');

	let str = '';
	arr.forEach((e,i) => {
		str += `<li>
			<span class="${e.child?'add':''}"></span>
			<div>${e.title}</div>`;


		str += `</li>`;
	});

	ul.innerHTML = str;




	
	

	




	// console.log(arr);

}