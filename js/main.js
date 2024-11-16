/* Cryptocoin Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    Sticky Ticker
=========================================================================*/ 
    $(function() {
        var ticker = $(".ticker_wrapper"),
            yOffset = 0,
            triggerPoint = $('#header').height();
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                ticker.addClass("ticker-fixed-top");
            } else {
                ticker.removeClass("ticker-fixed-top");
            }

        });
    });

/*=========================================================================
    Main Slider
=========================================================================*/
    $('#main-slider').nivoSlider({
        effect: 'random',
        animSpeed: 300,
        pauseTime: 5000,
        directionNav: true,
        manualAdvance: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        controlNav: true,
        prevText: "<i class='ti-arrow-left'></i>",
        nextText: "<i class='ti-arrow-right'></i>"
    });

/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $(function(){
        $('#mainmenu').slicknav({
            prependTo: '.bottom_content_wrap',
            label: '',
            allowParentLinks: true
        });
    });

/*=========================================================================
	Webticker Active
=========================================================================*/             
    $('#webTicker').webTicker({
        height: "40px",
    });        
             
/*=========================================================================
	Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 1000
	});
             
                
/*=========================================================================
    Team Carousel Active
=========================================================================*/          
    $('#team_carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2,
            },
            768 : {
                items: 3,
            },
            900 : {
                items: 4,
            }
        }
    });

/*=========================================================================
    Project Carousel Active
=========================================================================*/          
    $('#project_carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2,
            },
            768 : {
                items: 3,
            },
            900 : {
                items: 3,
            }
        }
    });             
/*=========================================================================
    Isotope Active
=========================================================================*/
	$('.project_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.project_filter li').on( 'click', function(){
	        $(".project_filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".project_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".project_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'masonry',
	    });
	});

			 
/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

             
/*=========================================================================
    Testimonial Carousel
=========================================================================*/
	$('#testimonial_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false
    });
 
/*=========================================================================
    Sponsor Carousel
=========================================================================*/
    $('#sponsor_carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        dots: false,
        responsive: true,
        responsive : {
            0 : {
                items: 2,
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 6,
            }
        }
    });
		
/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img_popup').venobox({
		numeratio: true,
		infinigall: true
	}); 
				 
/*=========================================================================
  Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
             
/*=========================================================================
   MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
             
    // Active WOW
    new WOW().init();         

})(jQuery);

//crypto currency
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
    const currency = 'inr';
    const params = `?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

    fetch(apiUrl + params)
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#crypto-table tbody');
            data.forEach(coin => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td data-label="Cryptocurrency"><img src="${coin.image}" alt="${coin.name}" style="width: 20px; vertical-align: middle;"> ${coin.name}</td>
                    <td data-label="Price">₹${coin.current_price.toLocaleString()}</td>
                    <td data-label="24H % Change" class="${coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}">
                        ${coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td data-label="24H Volume (Coin)">${coin.total_volume.toLocaleString()} ${coin.symbol.toUpperCase()}</td>
                    <td data-label="Supply">${coin.circulating_supply.toLocaleString()}</td>
                `;
                
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
 
