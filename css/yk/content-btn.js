	var aImg = document.querySelectorAll('.images');
	var aBtn = document.querySelectorAll ('.content-btn');
	var now = 0;
	function aa(){
		for(var i = 0;i<aImg.length;i++){
			aImg[i].style.opacity = '1';
			// aImg[i].style.zIndex='0';
			aBtn[i].className='content-btn';
		}
		aImg[now].style.opacity='1';
		// aImg[now].style.zIndex='20';
		aBtn[now].className='content-btn actives';
	}
	for(var i = 0;i<aBtn.length;i++){
		// console.log(aBtn)	
		aBtn[i].index=i;  				
		aBtn[i].onclick=setInterval(function(){
			now=this.index;				
			aa()						
		},3000)
	}