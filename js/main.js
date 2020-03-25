$(document).ready(function () {


});

jQuery(document).ready(function(){
	
	"use strict"
	
	$('.home').ripples({
		imageUrl: null,
		resolution: 512,
		dropRadious: 10,
		perturbance: 0.02,
		interactive: true,
		crossOrigin: ''
	});
});

$(document).ready(function() {

	"use strict";

	$('.tilt').tilt({
        maxTilt: 3,
        glare: false,
        maxGlare: 0,
        reverse: false,
        scale: 1
    });

});


var containerEl = document.querySelector('.mix-filter');

var mixer = mixitup(containerEl);


$(document).ready(function() {
	  $('.popup').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

});

//** scroll background color start **//
$(window).on("scroll", function() {
	if ($(window).scrollTop()) {
		$('.fixed-nav').addClass('black');
	}
	
	else {
		$('.fixed-nav').removeClass('black');
	}
})
//** scroll background color end **//


$('#nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});