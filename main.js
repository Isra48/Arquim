//Hide elements with animation attributes, add animated attributes
$('*[animation]').addClass('invisible animated');

$(window).scroll(function () {
	$('*[animation]').each(function () {
    //Position above the element to be animated
		var imgPos = $(this).offset().top;
    //Position at the top of the window
		var scroll = $(window).scrollTop();
    //Position to fire the animation
		var position = imgPos - window.innerHeight + window.innerHeight / 5;

    //Get the animation name described in the animation attribute
    if (this.hasAttribute('animation')) {
        var animation = this.getAttribute('animation');
    }
    //Display the element when it reaches the firing position and add the animation to the class name
    if (scroll > position) {
			$(this).removeClass('invisible').addClass(animation);
		}
    //Hide (reset) elements after scrolling to the top of the page
		if (scroll < 10) {
			$(this).removeClass(animation).addClass('invisible');
		}
	});
});