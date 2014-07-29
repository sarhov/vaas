$(document).ready(function() {
    console.log('I\'m ready!');
/*  --------------- */


// product-tabs


	$('.jsProductTabItem').first().addClass('active').siblings().removeClass('active');
	$('.jsProductTabContentItem').first().fadeIn().siblings().hide();


	$('.jsProductTabItem').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			return
		}
		else{
		$(this).addClass('active').siblings().removeClass('active');
		var needTab = $(this).data('href');
		$('.jsProductTabContentItem[data-name="'+ needTab +'"]').fadeIn().siblings().hide();
	}
	});









/*  ----------------- */
});
