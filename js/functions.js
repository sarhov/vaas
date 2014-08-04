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

// http://docs.dev7studios.com/caroufredsel-old/examples/callback-functions.php
// http://docs.dev7studios.com/caroufredsel-old/examples/custom-events.php
// http://docs.dev7studios.com/caroufredsel-old/code-examples/custom-events.php
$(function () {
	$('#carousel').carouFredSel({
		width: '100%',
		align: 'center',
		responsive: true,
    // set active slide on first load
    // (and when slides are dynamically added if I'm not mistaken)
    onCreate : function( data ) {
    	data.items.filter(":eq(0)").addClass("active")
    	setTimeout(function() {data.items.filter(":eq(0)").removeClass('active'); }, 2700);
    },

    items: {
    	visible: 1,
      //start: -1
  },
  scroll: {
      //items: 3,
      duration: 1000,
      timeoutDuration: 5200,
      fx: 'crossfade',

      // set active slide on scroll
      // onBefore : $current_position,
      onBefore : function( data ) {
        //data.items.old.removeClass( "active" ).delay(7000);
        //timeoutDuration 	5 

        data.items.old.filter(":eq(0)").removeClass('active');         
        //console.log(data);
    },
    onAfter	: function( data ) {
        //data.items.old.removeClass( "active" );
        data.items.visible.filter(":eq(0)").addClass("active");      
        setTimeout(function() {data.items.visible.filter(":eq(0)").removeClass('active'); }, 2700);
    },

    /*onAfter : $highlight,*/
},
prev : {
	button : ".carousel-nav.prev",
	key : "left"
},
next : {
	button : ".carousel-nav.next",
	key : "right"
},
pagination: {
	container: '.carousel-pagination',
	deviation: 0
}
});
});

$('#thumb_carousel').carouFredSel({
	 // width: '120px',
	 align: 'center',
	 responsive: true,
	 auto: false,
	 items: {
	 	visible: 4
	 },
	 scroll: {
	 	duration: 1000,
	 	items: 1

	 },
	 prev : {
	 	button : "#thumb_prev",
	 	key : "left"
	 },
	 next : {
	 	button : "#thumb_next",
	 	key: "right"
	 }
	});

CloudZoom.quickStart();
$(function(){
	$('#zoom1').bind('click',function(){ 
		//alert('yes')
var cloudZoom = $(this).data('CloudZoom'); // On click, get the Cloud Zoom object,
cloudZoom.closeZoom();
$.fancybox.open(cloudZoom.getGalleryList());// and pass Cloud Zoom's image list to Fancy Box.
return false;
});
}); 




/*  ----------------- */
});
