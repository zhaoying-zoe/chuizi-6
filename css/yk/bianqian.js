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
var oCart = document.querySelector('.cart')
var oCartHide = document.querySelector('.cart-hide')
var oCartTime = 0

function oCartDs(){
	oCartTime = setTimeout(function(){
			oCart.onmouseenter = function(){
			oCartHide.style.display = 'block'
		}
		oCart.onmouseleave = function(){
			oCartHide.style.display = 'none'
		}

	},1000)
}
oCart.onmouseenter = function(){
	clearTimeout(oCartTime)
}
oCart.onmouseleave = function(){
	oCartDs()
}


//切换多种语言鼠标移入
var oLanguage = document.querySelector('.language')
var oLanguageYc = document.querySelector('.language-yc')
var oLanguageTime = 0
clearTimeout(oLanguageTime)
function oLanguageDs(){
		oLanguageTime = setTimeout(function(){
			oLanguage.onmouseenter = function(){
				oLanguageYc.style.display = 'block'
		}
			oLanguage.onmouseleave = function(){
				oLanguageYc.style.display = 'none'
		}
	},500)
}

oLanguage.onmouseenter = function(){
	clearTimeout(oLanguageTime)
}
oLanguage.onmouseleave = function(){
	oLanguageDs()
}