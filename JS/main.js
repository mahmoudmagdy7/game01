import Data from './home.js'
import DisplayGame from './display.js';
let res = new Data
let display = new DisplayGame;

res.gettingResponse()



if ($(window).outerWidth() > 800) {
	res.changeNav()
} else {

	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('nav').css('background-color', 'rgb(18 26 38 / 54%)').css('backdrop-filter', 'blur(20px)')
		} else {
			$('nav').css('background-color', 'transparent').css('backdrop-filter', 'blur(0)')
		}
	})
	$('nav ul').click(function () {
		$(this).toggleClass('hovered')
		$('nav ul li').slideToggle()
	})

}

$('.item').click(function (e) {
	$('.overlay').css('display', 'flex')

	$('.item').removeClass('active');
	$(this).addClass('active');
	// target = this.id
	res.gettingResponse(this.id)

	$('.overlay').fadeOut().css('display', 'flex')

})

display.gettingGame()



$('#back').click(function (e) {
	$('#back').addClass('d-none')
	$('.game-content').fadeOut(500)
	$('.home-content').removeClass('d-none')
})


$(window).on('load', function () {
	$('.overlay').fadeOut().css('display', 'flex')
	$('.logo-top').css('animation', 'blinking 0.7s')
})



