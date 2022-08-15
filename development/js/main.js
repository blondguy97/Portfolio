'use strict'
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

hamburger.addEventListener('click', function () {
    menu.classList.add('menu_active')
})

close.addEventListener('click', function () {
    menu.classList.remove('menu_active')

})

const counters = document.querySelectorAll('.skills-rating__counter'),
      lines = document.querySelectorAll('.skills-rating__status-bar');

	  counters.forEach(function(item, i) {
		lines[i].style.width = item.innerHTML;
	  }) 