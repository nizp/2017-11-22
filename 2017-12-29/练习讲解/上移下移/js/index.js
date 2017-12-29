/*
	把所有的li的高度存在一个数组中
	[0,102,204,306,408];

	[li2,li1,li3,li4]
*/
let lis = document.getElementsByTagName('li');
let ul = document.getElementsByClassName('box')[0];
let arr = [];

//布局转换
for(var i=0;i<lis.length;i++){
	arr.push(lis[i].offsetTop);
	lis[i].style.top = lis[i].offsetTop + 'px';
}
for(var i=0;i<lis.length;i++){
	lis[i].style.position = 'absolute';

	let up = lis[i].children[1]; //上移
	let down = lis[i].children[2];//下移

	up.onclick = function(){
		let parent = this.parentNode; //li
		let prev = parent.previousElementSibling; //父级的前一个
		ul.insertBefore(parent,prev);
		m();
	}

	down.onclick = function(){
		let parent = this.parentNode; //li
		let next = parent.nextElementSibling;//父级的下一个
		let last = ul.lastElementChild;
		//有没有下个兄弟级，有就调换位置，没有就添加到第一的位置。
		if(next){
			ul.insertBefore(next,parent);
		}else{
			ul.insertBefore(parent,ul.children[0]);
		}
		m();
	}
}

function m(){
	for(var i=0;i<lis.length;i++){
		move({
			attrs:{
				top:arr[i]
			},
			obj:lis[i],
			d:500
		});
	}
}




console.log(arr);




// console.log(lis[2].offsetTop);
