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
			return
		}
		// if not, we can switch tab
		else{
		$(this).addClass('active').siblings().removeClass('active');
		var needTab = $(this).data('href');
		$('.jsProductTabContentItem[data-name="'+ needTab +'"]').fadeIn().siblings().hide();
	}
	});

/* END product tabs */









/*  ----------------- */
});
