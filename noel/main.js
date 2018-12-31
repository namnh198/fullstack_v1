$('#christmas_scene').parallax({
	scalarX: 5,
	scalarY: 15,
	invertY: false
});

$(window).on('load', function(){
	setParallaxHeight();
	setElementHeight();
});

$(window).on('resize', function(){
	setParallaxHeight();
	setParallaxWidth();
	setElementHeight();
});

function setParallaxHeight() {
	var height = $(window).height();
	$('#christmas_scene .layer-photo').css('height' , height);
}

function setParallaxWidth() {
	var width = $(window).width();
	$('#christmas_scene .layer-photo').css('width' , width);
}

function setElementHeight() {
	var height = $(window).height();

	if(height <= 400) {
		var width = height / 2;
	} 
	else if (height <= 500) {
		var width = height / 3.5;
	}
	else if (height <= 700) {
		var width = height / 3;
	}
	else if (height <= 800) {
		var width = height / 2.8;
	}

	$('#christmas_tree').css('width', width);
}

$('#countdown').countdown('2019/01/01', function(event) {
	$(this).html(
		event.strftime('\
			<div class="col-3 countdown-globe">%D <span>Days</span></div>\
			<div class="col-3 countdown-globe">%H <span>Hours</span></div>\
			<div class="col-3 countdown-globe">%M <span>Minutes</span></div>\
			<div class="col-3 countdown-globe">%S <span>Seconds</span></div>\
		')
	)
});
