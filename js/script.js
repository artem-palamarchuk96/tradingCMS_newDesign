$(document).ready(function() {

	// fancybox
	$(".fancybox").fancybox();

	//Carousel
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1
	});

	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//top anchor
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//sum
	$('.minus').click(function() {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.plus').click(function() {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
        $input.change();
		return false;
	});

});