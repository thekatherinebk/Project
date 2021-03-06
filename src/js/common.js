
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


$('.user-menu__link.js-cart-btn').on('click', function() {
	$('.user-cart').toggleClass('is-active'); 	
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
	$('.popup--login').addClass('is-active'); 
	$('.overlay-popup').addClass('is-active'); 
	$('body').addClass('blur-filter'); 

})

$('.js-login-esc').click(function(){
	$('.popup--login').removeClass('is-active'); 
	$('.overlay-popup').removeClass('is-active'); 
	$('body').removeClass('blur-filter'); 
})

$('.js-signup').click(function(){
	$('.popup--signup').addClass('is-active'); 
	$('.overlay-popup').addClass('is-active'); 
	$('body').addClass('blur-filter'); 

})

$('.js-signup-esc').click(function(){
	$('.popup--signup').removeClass('is-active'); 
	$('.overlay-popup').removeClass('is-active'); 
	$('body').removeClass('blur-filter'); 
})

$('.overlay-popup').click(function(){
	$('.popup').removeClass('is-active'); 
	$('.overlay-popup').removeClass('is-active'); 
	$('body').removeClass('blur-filter'); 
})


$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('.header__top').hide(300);

        $('.header__bottom-container').addClass('padding--sm');

        $('.contentwrap').addClass('padding-t--sm');
    } else {
        $('.header__top').show(300);
        $('.header__bottom-container').removeClass('padding--sm');
        $('.content').removeClass('padding-t--sm');
    }
}); 