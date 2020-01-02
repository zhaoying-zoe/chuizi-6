var aBtn = document.querySelectorAll('.main .nav li a');
// console.log(aBtn);

for(var i =0;i<aBtn.length;i++){
	// console.log(i);
	aBtn[i].index=i;
		aBtn[i].onclick=function(){
		for(var l = 0;l<aBtn.length;l++){
			aBtn[l].className='nav-item-a';
		}
		this.className='active nav-item-a'
	}
		
}

//购物车鼠标移入
var Ocart = document.querySelector('.cart')
var oCartHide = document.querySelector('.cart-hide')
Ocart.onmouseenter = function(){
	oCartHide.style.display = 'block'
}
Ocart.onmouseleave = function(){
	oCartHide.style.display = 'none'
}