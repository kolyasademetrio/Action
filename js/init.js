$(window).load(function() {
    $('.flexslider').flexslider({
		animation: "slide",
		directionNav: true,
		prevText: "",
		nextText: "",
		controlNav: false,
		controlsContainer: $('.flexslider'),
		slideshow: false,
		slideshowSpeed: 2000,
		pauseOnAction: true
    });
});

$(document).ready(function() {
	$('.gift__orderButton,.tasks__orderButton,.reasons__orderButton').magnificPopup({
		type:'inline',
		removalDelay: 500,
		mainClass: 'mfp-fade popup_inline',
		showCloseBtn: true,
		closeMarkup: '<div class="mfp-close">x</div>',
		closeBtnInside: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		alignTop: false,
		fixedContentPos: true
	});

	$('.link').magnificPopup({
		type: 'image',
		removalDelay: 500,
		mainClass: 'mfp-fade popup_image',
		showCloseBtn: true,
		closeMarkup: '<div class="mfp-close">x</div>',
		closeBtnInside: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		alignTop: false,
		fixedContentPos: true,
		gallery: {
			enabled: true
		}
	});

	$('.wrapper').each(function() {
		$(this).magnificPopup({
			delegate: '.link',
			type: 'image',
			removalDelay: 500,
			mainClass: 'mfp-fade popup_image',
			showCloseBtn: true,
			closeMarkup: '<div class="mfp-close">x</div>',
			closeBtnInside: true,
			closeOnContentClick: false,
			closeOnBgClick: true,
			alignTop: false,
			fixedContentPos: true,
			gallery: {
				enabled:true
			}  
		});
	});

});

