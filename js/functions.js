$(document).ready(function() {
    console.log('I\'m ready!');
/*  --------------- */


/*product-tabs*/
	// initial values for tabs, before any action
	$('.jsProductTabItem').first().addClass('active').siblings().removeClass('active');
	$('.jsProductTabContentItem').first().fadeIn().siblings().hide();

	// produtc tabs actions
	$('.jsProductTabItem').click(function(e) {
		e.preventDefault();
		// check if we are in current tab, and no need to go ahead
		if ($(this).hasClass('active')) {
			return;
		}
		// if not, we can switch tab
		else{
		$(this).addClass('active').siblings().removeClass('active');
		var needTab = $(this).data('href');
		$('.jsProductTabContentItem[data-name="'+ needTab +'"]').fadeIn().siblings().hide();
	}
	});
/* END product tabs */


/* carousel tabs */
	carousel('carousel_123');
	carousel('carousel_321');
	carousel('carousel_231');
	function carousel (thecarousel){
		var mycarousel = $('#' + thecarousel);
		mycarousel.find('.jsCarouselTabSwitcher').first().addClass('isActive').siblings('dt').removeClass('isActive');
		mycarousel.find('.jsCarouselTabContent').first().fadeIn().siblings('dd').hide();
		mycarousel.find('.jsCarouselTabSwitcher').click(function(e) {
			e.preventDefault();
			if ($(this).hasClass('isActive')) {
				return;
			}

			else{
				var needTab = $(this).data('href');
				$(this).addClass('isActive').siblings('dt').removeClass('isActive');
				mycarousel.find('.jsCarouselTabContent[data-name="'+ needTab +'"]').fadeIn().siblings('dd').hide();
			}
		});
	}
/*  END carousel tabs */

/* Grid - List */


	$('.jsList').click(function() {
	    $('.products').addClass('products_-list').removeClass('grid')
	    $.totalStorage('layout', 'list');
	    $(this).addClass('active').siblings('button').removeClass('active')
	});

	$('.jsGrid').click(function() {
	    $('.products').addClass('grid').removeClass('products_-list')
	    $.totalStorage('layout', 'grid');
	    $(this).addClass('active').siblings('button').removeClass('active')
	});

	if ($.totalStorage('layout') == 'list') {
	    $('.products').addClass('products_-list');
	    $('.jsList').addClass('active').siblings('button').removeClass('active')
	} else {
	    $('.products').removeClass('products_-list');
	    $('.jsGrid').addClass('active').siblings('button').removeClass('active')
	}

/* END Grid  - List */




/*  ----------------- */
});
