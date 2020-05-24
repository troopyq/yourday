$(document).ready(function(){
	$('#slider-1').slick({
				infinite: false,
				speed: 1500,
				arrows: true,
				centerMode: true,
				centerPadding: '15px',
 				mobileFirst: true,
 				swipeToSlide: true,
 				vertical: true, 
 				adaptiveHeight: true,
 				cssEase: "ease-in-out",
 				lazyLoad: "progressive",
 				touchThreshold: 8,
 				focusOnChange: true,
 				nextArrow: $(".back-1"),

 			});

$('#slider-2').slick({
				infinite: false,
				speed: 1500,
				arrows: true,
				centerMode: true,
				centerPadding: '15px',
 				mobileFirst: true,
 				swipeToSlide: true,
 				vertical: true, 
 				adaptiveHeight: true,
 				cssEase: "ease-in-out",
 				lazyLoad: "progressive",
 				touchThreshold: 8,
 				focusOnChange: true,
 				nextArrow: $(".back-2"),
 				
 			});
	$(".slider").show();
})

