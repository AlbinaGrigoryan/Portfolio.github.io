$(function() {
    
    // Send message
    $('form.personal').on('submit', function (e) {
        e.preventDefault();
        // get data
        var form = $(this),
            btn = form.find('button[type=submit]'),
            messages = form.find('.messages'),
            
            uName = form.find('input[name=name]').val(),
            uEmail = form.find('input[name=email]').val(),
            uPhone = form.find('input[name=phone]').val(),
            uSubject = form.find('input[name=subject]').val(),
            uMessage = form.find('textarea[name=message]').val();
//            uTerms = form.find('input[name=terms]'),
//            uTermsVal = 0;
        var formData = new FormData(form[0]);
        
        
        
//        if (uTerms.is(':checked')) {
//            uTermsVal = 1;
//        }
        // formData
//        formData.append('terms', uTermsVal);
	
        
        /* check data */
        // name
        if (uName == '') {
            messages.html('<span class="color-danger">Fill in Your name,please.<span>');
            return false;
        }
        // email
        if (uEmail == '') {
            messages.html('<span class="color-danger">Fill in Your email,please.<span>');
            return false;
        }
        // phone
        if (uPhone == '') {
            messages.html('<span class="color-danger">Fill in Your phone,please.<span>');
            return false;
        }
        // message
        if (uMessage == '') {
            messages.html('<span class="color-danger">Leave a letter,please.<span>');
            return false;
        }
        // terms
//        if (uTermsVal == 0) {
//            messages.html('<span class="color-danger">Գրանցվելու համար հարկավոր է համաձայնվել պայմանների հետ:<span>');
//            return false;
//        };
   
        $.ajax({
            url: 'https://weber.am/server.php',
            type: 'post',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function() {
                messages.html('Loading...');
                btn.prop('disabled', true);
            },
            success: function(data) {
                setTimeout(function() {
                    messages.html('<span class="color-success">Your message succesfully send to me.Thank You.<span>');
                    btn.prop('disabled', false);
                }, 1000);
            },
            error: function() {
                messages.html('<span class="color-danger">Communication failure, please try again.<span>');
                btn.prop('disabled', false);
            }
        });
    });
	
    // animations
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    
    // from formPage tohomePage
    $('#homePage').on('click', function() {
        location.replace('index.html');
    });
    
	// YT backgrounf video
	$("#P1").YTPlayer();
    
    // light gallery
    $("#lightgallery").lightGallery();
    
    /* filterizr */
	// Default options
	const options = {
		animationDuration: 0.5, // in seconds
		callbacks: {
			onFilteringStart: function() { },
			onFilteringEnd: function() { },
			onShufflingStart: function() { },
			onShufflingEnd: function() { },
			onSortingStart: function() { },
			onSortingEnd: function() { }
		},
		controlsSelector: '', // Selector for custom controls
		delay: 0, // Transition delay in ms
		delayMode: 'progressive', // 'progressive' or 'alternate'
		easing: 'ease-out',
		filter: 'all', // Initial filter
		filterOutCss: { // Filtering out animation
			opacity: 0,
			transform: 'scale(0.5)'
		},
		filterInCss: { // Filtering in animation
			opacity: 0,
			transform: 'scale(1)'
		},
		gridItemsSelector: '.filtr-container',
		gutterPixels: 0, // Items spacing in pixels
		layout: 'sameSize', // See layouts
		multifilterLogicalOperator: 'or',
		searchTerm: '',
		setupControls: true, // Should be false if controlsSelector is set 
		spinner: { // Configuration for built-in spinner
			enabled: false,
			fillColor: 'yellow',
			styles: {
				height: '75px',
				margin: '10 auto',
				width: '75px',
				'z-index': 2,
			},
		},
	}
	//filterize
    $('.filter-container').filterizr();
    // active menu 
    $(".simplefilter").on('click', 'li', function() {
    	$(this).siblings().removeClass('active');
    	$(this).addClass('active');
    });
	
    // carousel bootstrap
    $('.carousel').carousel({
        interval: 2000,
    });

    // owl carousel 
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        loop:true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,                
            },
            600:{
                items:3,               
            },
            800:{
                items:4,               
            },
            1000:{
                items:6,
            }
        }
    });
    
    // typed.js    
    var typed = new Typed('#typed', {
        strings: ["<em>Extraordinary art and creative minimal.</em>"],
        typeSpeed: 40
    });
    
    // window scrolling event
    $(window).scroll(function() {
        // show or hide elements
        if ($(this).scrollTop() > 768) {
            setTimeout(function() {
                $('header#home').animate({ top: 0 }, 300);
            }, 300);
            // go to top
            $('.scroll_top').fadeIn();
        } else {
            setTimeout(function() {
                $('header#header').removeClass('fixed');
                $('header#header').css({ position: 'absolute', top: 0 });
            }, 300);
            // go to top
            $('.scroll_top').fadeOut(2000);
        }
    
    });
    $(window).scroll(function() {
        // show or hide elements
        if ($(this).scrollTop() > 108) {
            $('.head').addClass('bg');
        } else {
            $('.head').removeClass('bg');
        }    
    });    
    
    
    // scroll
    $('.scroll').on('click', function (e) {
        e.preventDefault();
        // options
        var link = $(this),
            elemSelector = link.data('scroll-elem'),
            delay = link.data('scroll-delay'),
            elem = $(elemSelector),
            elemTop = elem.offset().top;
        // animate
        $('body, html').animate({ scrollTop: elemTop }, delay);
    });
    
    
    
//	// hamburger
//	$('.hamburger').on('click', function() {
//		$(this).toggleClass('is-active');
//	});   
    
	
	// smoothScrolling
    function smoothScrolling(selector, delay) {
        $('html, body').stop().animate({
            scrollTop: $(selector).offset().top,
        }, delay, 'easeInOutQuart');
    }
});