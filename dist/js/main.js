document.addEventListener("DOMContentLoaded", function(event) { 

	if(document.documentElement.clientWidth < 991 && document.documentElement.clientWidth > 574) {
		// simplebar
		document.querySelectorAll('.get__wrapper').forEach(el => {
			new SimpleBar(el)
		});
	
		document.querySelectorAll('.now__box').forEach(el => {
			new SimpleBar(el)
		});
	};


	// menu
	let menuList = document.querySelector('.menu__list');
	let burger = document.querySelector('.header__burger');
	let close = document.querySelector('.menu__close');
	let menu = document.querySelector('.menu');
	let body = document.querySelector('body');
	let html = document.querySelector('html');
	burger.onclick = function(){
		menu.classList.add('menu--open');
		body.classList.add('overflow-hidden');
		html.classList.add('overflow-hidden');
	}
	close.onclick = function(){
		menu.classList.remove('menu--open');
		body.classList.remove('overflow-hidden');
		html.classList.remove('overflow-hidden');
	}
	menuList.onclick = function(){
		menu.classList.remove('menu--open');
		body.classList.remove('overflow-hidden');
		html.classList.remove('overflow-hidden');
	}
});

// window.onload = function() {
// 	// preloader
// 	document.querySelector('#preloader').style.display = 'none';
// 	document.querySelector('.main__phone1').classList.add('moveFromBottom');
// 	document.querySelector('.main__phone2').classList.add('moveFromBottom');
// }