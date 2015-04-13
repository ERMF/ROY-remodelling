$(document).ready(function(){
	var max = 1,
		min = 0.75;

	$(".nav").mouseover(function(){
		var ele = $(this),
			duration = (parseFloat(ele.css('opacity')) - min) * 100;
		ele.stop().fadeTo(duration, 0.75);
		console.log(this);

	}).mouseout(function(){
		$(this).stop().delay(100).fadeTo(1400, 1);
	});

	// DOn't need to call document again - put it all into the same function
});


 