/* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/   
/*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Search JS
* Mobile Menu JS
* Hero Slider JS
* Testimonial Slider JS
* Portfolio Slider JS
* Clients Slider JS
* Single Portfolio Slider JS
* Accordion JS
* Nice Select JS
* Date Picker JS
* Counter Up JS
* Checkbox JS
* Right Bar JS
* Video Popup JS
* Wow JS
* Scroll Up JS
* Animate Scroll JS
* Stellar JS
* Google Maps JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/ 
(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		$('.pro-features .get-pro').on( "click", function(){
			$('.pro-features').toggleClass('active');
		});
		
		/*====================================
			Search JS
		======================================*/ 
		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});
		
		/*===============================
			Hero Slider JS
		=================================*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/ 
		$('.testimonial-slider').owlCarousel({
			items:3,
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				1: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*===============================
			Portfolio Slider JS
		=================================*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			margin:15,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*=====================================
			Counter Up JS
		======================================*/
		$('.counter').counterUp({
			delay:20,
			time:2000
		});
		
		/*===============================
			Clients Slider JS
		=================================*/ 
		$('.clients-slider').owlCarousel({
			items:5,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*====================================
			Single Portfolio Slider JS
		======================================*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});
		
		/*===================
			Accordion JS
		=====================*/ 
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function(j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});
		
		/*====================================
			Nice Select JS
		======================================*/ 	
		$('select').niceSelect();
		
		/*=====================================
			Date Picker JS
		======================================*/ 
		$( function() {
			$( "#datepicker" ).datepicker();
		} );
		
		
		
		/*===============================
			Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*===============================
			Right Bar JS
		=================================*/ 
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
		
		/*=====================
			Video Popup JS
		=======================*/ 
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		/*================
			Wow JS
		==================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		/*====================
			Google Maps JS
		======================*/
		var map = new GMaps({
				el: '#map',
				lat: 23.011245,
				lng: 90.884780,
				scrollwheel: false,
			});
			map.addMarker({
				lat: 23.011245,
				lng: 90.884780,
				title: 'Marker with InfoWindow',
				infoWindow: {
				content: '<p>welcome to Medipro</p>'
			}
		
		});
	});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);
/**
* Template Name: Arsha
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Updated: Jun 02 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
	"use strict";
  
	/**
	 * Apply .scrolled class to the body as the page is scrolled down
	 */
	function toggleScrolled() {
	  const selectBody = document.querySelector('body');
	  const selectHeader = document.querySelector('#header');
	  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
	  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
	}
  
	document.addEventListener('scroll', toggleScrolled);
	window.addEventListener('load', toggleScrolled);
  
	/**
	 * Mobile nav toggle
	 */
	const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
	function mobileNavToogle() {
	  document.querySelector('body').classList.toggle('mobile-nav-active');
	  mobileNavToggleBtn.classList.toggle('bi-list');
	  mobileNavToggleBtn.classList.toggle('bi-x');
	}
	mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
	/**
	 * Hide mobile nav on same-page/hash links
	 */
	document.querySelectorAll('#navmenu a').forEach(navmenu => {
	  navmenu.addEventListener('click', () => {
		if (document.querySelector('.mobile-nav-active')) {
		  mobileNavToogle();
		}
	  });
  
	});
  
	/**
	 * Toggle mobile nav dropdowns
	 */
	document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
	  navmenu.addEventListener('click', function(e) {
		if (document.querySelector('.mobile-nav-active')) {
		  e.preventDefault();
		  this.parentNode.classList.toggle('active');
		  this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
		  e.stopImmediatePropagation();
		}
	  });
	});
  
	/**
	 * Preloader
	 */
	const preloader = document.querySelector('#preloader');
	if (preloader) {
	  window.addEventListener('load', () => {
		preloader.remove();
	  });
	}
  
	/**
	 * Scroll top button
	 */
	let scrollTop = document.querySelector('.scroll-top');
  
	function toggleScrollTop() {
	  if (scrollTop) {
		window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
	  }
	}
	scrollTop.addEventListener('click', (e) => {
	  e.preventDefault();
	  window.scrollTo({
		top: 0,
		behavior: 'smooth'
	  });
	});
  
	window.addEventListener('load', toggleScrollTop);
	document.addEventListener('scroll', toggleScrollTop);
  
	/**
	 * Animation on scroll function and init
	 */
	function aosInit() {
	  AOS.init({
		duration: 600,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	  });
	}
	window.addEventListener('load', aosInit);
  
	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
	  selector: '.glightbox'
	});
  
	/**
	 * Init swiper sliders
	 */
	function initSwiper() {
	  document.querySelectorAll('.swiper').forEach(function(swiper) {
		let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
		new Swiper(swiper, config);
	  });
	}
	window.addEventListener('load', initSwiper);
  
	/**
	 * Frequently Asked Questions Toggle
	 */
	document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
	  faqItem.addEventListener('click', () => {
		faqItem.parentNode.classList.toggle('faq-active');
	  });
	});
  
	/**
	 * Animate the skills items on reveal
	 */
	let skillsAnimation = document.querySelectorAll('.skills-animation');
	skillsAnimation.forEach((item) => {
	  new Waypoint({
		element: item,
		offset: '80%',
		handler: function(direction) {
		  let progress = item.querySelectorAll('.progress .progress-bar');
		  progress.forEach(el => {
			el.style.width = el.getAttribute('aria-valuenow') + '%';
		  });
		}
	  });
	});
  
	/**
	 * Init isotope layout and filters
	 */
	document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
	  let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
	  let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
	  let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
  
	  let initIsotope;
	  imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
		initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
		  itemSelector: '.isotope-item',
		  layoutMode: layout,
		  filter: filter,
		  sortBy: sort
		});
	  });
  
	  isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
		filters.addEventListener('click', function() {
		  isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
		  this.classList.add('filter-active');
		  initIsotope.arrange({
			filter: this.getAttribute('data-filter')
		  });
		  if (typeof aosInit === 'function') {
			aosInit();
		  }
		}, false);
	  });
  
	});
  
	/**
	 * Correct scrolling position upon page load for URLs containing hash links.
	 */
	window.addEventListener('load', function(e) {
	  if (window.location.hash) {
		if (document.querySelector(window.location.hash)) {
		  setTimeout(() => {
			let section = document.querySelector(window.location.hash);
			let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
			window.scrollTo({
			  top: section.offsetTop - parseInt(scrollMarginTop),
			  behavior: 'smooth'
			});
		  }, 100);
		}
	  }
	});
  
	/**
	 * Navmenu Scrollspy
	 */
	let navmenulinks = document.querySelectorAll('.navmenu a');
  
	function navmenuScrollspy() {
	  navmenulinks.forEach(navmenulink => {
		if (!navmenulink.hash) return;
		let section = document.querySelector(navmenulink.hash);
		if (!section) return;
		let position = window.scrollY + 200;
		if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
		  document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
		  navmenulink.classList.add('active');
		} else {
		  navmenulink.classList.remove('active');
		}
	  })
	}
	window.addEventListener('load', navmenuScrollspy);
	document.addEventListener('scroll', navmenuScrollspy);
  
  })();
