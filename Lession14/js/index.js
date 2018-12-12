$(document).ready(function(){
	$('#showLeft').click(function() {
		$('.left-menu').toggleClass('menu-open');
		$('.button > button').toggleClass('disabled');
		$(this).toggleClass('active disabled');
	});

	$('#showRight').click(function() {
		$('.right-menu').toggleClass('menu-open');
		$('.button > button').toggleClass('disabled');
		$(this).toggleClass('active disabled');
	});

	$('#showTop').click(function() {
		$('.top-menu').toggleClass('menu-open');
		$('.button > button').toggleClass('disabled');
		$(this).toggleClass('active disabled');
	});

	$('#showBottom').click(function() {
		$('.bottom-menu').toggleClass('menu-open');
		$('.button > button').toggleClass('disabled');
		$(this).toggleClass('active disabled');
	});

	$('#showPushLeft').click(function() {
		$('.left-menu').toggleClass('menu-open');
		$('body').toggleClass('push-to-right');
		$('.button > button').toggleClass('disabled');
		$(this).toggleClass('active disabled');
	});

	$('#showPushRight').click(function() {
		$('.right-menu').toggleClass('menu-open');
		$('body').toggleClass('push-to-left');
		$('.button > button').toggleClass('disabled');
		$(this).toggleClass('active disabled');
	});
});