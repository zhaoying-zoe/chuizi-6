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




oCartDs()
//购物车鼠标移入
function oCartDs(){
	var oCart = document.querySelector('.cart')
	var oCartHide = document.querySelector('.cart-hide')
	var oCartTime = 0
	oCart.onmouseenter = function(){
		animate(oCartHide,{height:316},true)
	}
}


//版本下载移入
var oAndroid = document.querySelector('.android')
var oiPhone = document.querySelector('.iPhone')
var oEeweima = document.querySelector('.erweima')
var oSaoma = document.querySelector('.saoma')
oAndroid.onmouseenter = function(){
	oAndroid.style.background = '#eee'
}
oAndroid.onmouseleave = function(){
	oAndroid.style.background = '#f9f9f9'
}
oiPhone.onmouseenter = function(){
	oiPhone.style.background = '#eee'
}
oiPhone.onmouseleave = function(){
	oiPhone.style.background = '#f9f9f9'
}
oEeweima.onmouseenter = function(){
	oSaoma.style.display = 'block'
	oSaoma.style.zIndex = '5'
	oSaoma.style.background = '#fff'
}
oEeweima.onmouseleave = function(){
	oSaoma.style.display = 'none'
}