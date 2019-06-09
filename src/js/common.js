
/*
 * switching class between btns in language and currency
 */
$('.btn-box__link').on('click', function (){
	if($(this).parent().hasClass('currency')){
		$('.currency .btn-box__link').removeClass('is-active')
	} else if ($(this).parent().hasClass('lang')) {
		$('.lang .btn-box__link').removeClass('is-active')
	}

	$(this).toggleClass('is-active');	
})


/*
 * hamburger 
 */

$('.hamburger').on('click', function() {
	$(this).toggleClass('is-active'); 
	$('.navigation-mobile').toggleClass('is-active');
})


/*
 * Adding pop-up user-cart
 */

$('.js-cart-btn').on('mouseenter', function() {
	$('.user-cart').addClass('is-active'); 	
})

$('.js-cart-btn').on('mouseleave', function() {
	$('.user-cart').removeClass('is-active'); 	
})



/*
 *initializing owl-carousel on .carousel 
 */

	$('.carousel').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: true,
        dots: true, 
        navText: ['<svg class="icon-arrow"><use xlink:href="img/sprite.svg#back" /></svg', '<svg class="icon-arrow"><use xlink:href="img/sprite.svg#next"/></svg'],

    });


/*
 * Popup initalize
 */
$('.js-login').click(function(){
	$('.login-popup').addClass('is-active'); 
	$('.overlay-popup').addClass('is-active'); 
	$('body').addClass('blur-filter'); 

})

$('.login-popup__esc-btn').click(function(){
	$('.login-popup').removeClass('is-active'); 
	$('.overlay-popup').removeClass('is-active'); 
	$('body').removeClass('blur-filter'); 
})