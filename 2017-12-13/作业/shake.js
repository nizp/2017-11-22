const uls = document.querySelector('.clear').getElementsByTagName('ul');

/*
	1.点击按钮获取未来的时间

	2.拿到未来的时间去写倒计时

	3.图片数码时钟

	4.判断时间到

	5....
*/
let arr = ['img/phone.jpg','img/computer.jpg','img/flat.jpg','img/watch.jpg'];
const tbody = document.querySelector('.tb');

for(var i=0;i<uls.length;i++){
	cf(i);
	uls[i].index = i;

}
function cf(i){//Commodity frame 商品下架
	const ul1 = uls[i];
	const lis = ul1.getElementsByTagName('li');
	const txt = lis[0].getElementsByTagName('input')[0];
	const btn = lis[0].getElementsByTagName('span')[0];
	btn.timer = null;
	const imgs = lis[1].getElementsByTagName('img');
	const goodsTxt = lis[3].innerText;
	const goodsEm = lis[4].getElementsByTagName('em')[0].innerText;
	const mask = ul1.getElementsByTagName('div')[0];
	btn.onclick = function(){
		let _this = this;
		const goodsImg = arr[ul1.index]; 
		let val = txt.value;
		let newDate = new Date(val); //未来的时间
		
		TimeFn(newDate);

		//倒计时
		function TimeFn(newDate){ //传未来的时间
			//this 是window
			// console.log(this);
			// console.log(_this);
			//关闭第几个timer
			clearInterval(_this.timer);
			_this.timer = setInterval(fn,1000);
			function fn(){
				let nowDate = new Date();//现在的时间
				let t = (newDate - nowDate)/1000; //剩下的时间
				if(t < 0){
					clearInterval(_this.timer);
					shake({
						obj:ul1,
						callback:function(){
							mask.style.display = 'block';
							let z = mask.getElementsByTagName('i')[0];
							setTimeout(function(){
								z.style.opacity = 1;
								z.style.transform = 'scale(1)';
								setTimeout(function(){
									//创建内容
									add(goodsTxt,goodsEm,goodsImg);
								},500);
							},50);
	
						}
					});
				}else{
		
					let iH = Math.floor(t%86400/3600);
					
					let iM = Math.floor(t%86400%3600/60)
					
					let iSe = Math.floor(t%60);
			
					let str = toDou(iH)+':'+toDou(iM) + ':' + toDou(iSe);
					
					// console.log(imgs)
					for(var i=0;i<str.length;i++){
						if(i!==2 && i!==5){
							imgs[i].src = 'img/'+str[i]+'.png';
						}
					}
				}
			}
	
	
			function add(txt,pre,img){
				tbody.style.opacity = 0;
	
				tbody.innerHTML += `
					<tr>
						<td>${txt}</td>
						<td>${pre}</td>
						<td><img height="50" src="${img}"></td>
					</tr>`;
				setTimeout(function(){
					tbody.style.opacity = 1;
				},300);
				
				console.log(txt,pre,img);
			}
	
		}
	
	}

}






function toDou(n){
	return n<10?'0'+n:''+n;
}









console.log(uls);
