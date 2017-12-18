const uls = document.querySelector('.clear').getElementsByTagName('ul');

/*
	1.点击按钮获取未来的时间

	2.拿到未来的时间去写倒计时

	3.图片数码时钟

	4.判断时间到

	5....
*/
let arr = ['img/phone.jpg','img/computer.jpg','img/flat.jpg','img/watch.jpg'];

const ul1 = uls[0];
const lis = ul1.getElementsByTagName('li');
const txt = lis[0].getElementsByTagName('input')[0];
const btn = lis[0].getElementsByTagName('span')[0];
const imgs = lis[1].getElementsByTagName('img');
const goodsImg = arr[0]; //ul1.index
const goodsTxt = lis[3].innerText;
const goodsEm = lis[4].getElementsByTagName('em')[0].innerText;
const mask = ul1.getElementsByTagName('div')[0];
const tbody = document.querySelector('.tb');
btn.onclick = function(){
	let val = txt.value;
	let newDate = new Date(val); //未来的时间
	TimeFn(newDate);

	
	function TimeFn(newDate){ //传未来的时间
		let timer = null;
		
		fn();
		timer = setInterval(fn,1000);
		function fn(){
			let nowDate = new Date();
			let t = (newDate - nowDate)/1000;
	
			if(t < 0){
				clearInterval(timer);
				shake({
					obj:ul1,
					callback:function(){
						mask.style.display = 'block';
						let z = mask.getElementsByTagName('i')[0];
						setTimeout(function(){
							z.style.opacity = 1;
							z.style.transform = 'scale(1)';
							setTimeout(function(){
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
			
			
			console.log(txt,pre,img)
		}

	}

}





function toDou(n){
	return n<10?'0'+n:''+n;
}









console.log(uls);
