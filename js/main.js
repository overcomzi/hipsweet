$(document).ready(function() {
	
//	soft scroll
	(function(){
		var $root = $('html, body');

		$('.link-form-order').click(function (evt) {
				$root.animate({
						scrollTop: $( $.attr(this, 'href') ).offset().top
				}, 1000);
		});
	}());
	
	
//	TABS 
	(function() {
		var timerFadeOut;
		
		$('.team-tab').on('click', function(evt) {
			evt.preventDefault();
			
			if (timerFadeOut)
				timerFadeOut.stop(true, true);
			var link = $(this),
					item = link.closest('.team-list-tabs__item'),
					container = item.closest('.team__wrap'),
					content = container.find('.team-content__item'),
					contentCurrent = content.filter('.team-content__item_active'),
					numberItem = item.index(),
					contentActiveNext = content.eq(numberItem);
		
			if (item.hasClass('team-list-tabs__item_active'))
				return false;
			
			item.addClass('team-list-tabs__item_active')
			  	.siblings()
					.removeClass('team-list-tabs__item_active');
			
			contentCurrent.fadeOut(300, function() {
				timerFadeOut = contentActiveNext.fadeIn(300, function() {
					$(this).addClass('team-content__item_active')
							 					   .siblings()
						 							 .removeClass('team-content__item_active');
				});
			});			
		});
	}());
	
//	ACCO 
	(function() {
		$('.faq-block__caption').on('click', function(evt) {
			evt.preventDefault();
			
			var $this = $(this),
					item = $this.closest('.faq-list__item'),
					container = $this.closest('.faq-list'),
					content = item.find('.faq-block__content'),
					otherContent = item.siblings().find('.faq-block__content'),
					duration = 350;
		
				if (item.hasClass('faq-list__item_active')) {
					content.slideUp(duration, function() {
						item.removeClass('faq-list__item_active');
					});
				} else {
						otherContent.slideUp(duration, function() {
							item.siblings().removeClass('faq-list__item_active');
					});
						content.slideDown(duration, function() {
						item.addClass('faq-list__item_active');
					});
				}
		});
	}());
	
//	BXSLIDER 
	(function() {
			$('.cupcake-slider__list').bxSlider({
			mode: 'horizontal',
			speed: 700,
			captions: true,
			auto: true,
			pause: 8000,
			autoHover: true,
			touchEnabled: true,
			slideWidth: 1060,
			controls: false,
			});
	}());
	
//	MASK 
	(function() {
		$('.form-order__input[type=tel]').mask('8 (000) 000-00-00');
	}());
});

// YANDEX MAP
(function(){
	ymaps.ready(init);
	function init() {     
			var myMap = new ymaps.Map("map", {
					center: [59.897483713537774,30.42515617061673],
					zoom: 13,
					controls: []
			});

		var myPlacemark = new ymaps.Placemark([59.896643258085625,30.423773499999964], {}, {
			preset: 'islands#redIcon',
			iconLayout: 'default#image',
			iconImageHref: 'img/decor/map_mark.png',
			iconImageSize: [42, 59],
			iconImageOffset: [-21, -60],

		});

		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors
			.disable('scrollZoom')
			.enable();
	}
}());