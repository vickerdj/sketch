

$(document).ready(function() {
	color = "red";

	for (i=1; i<17; i++) {
	$('#container').append('<div id="sq"' + i + '></div>');
	};

	$('#container > div').mouseenter(function(){
	 	$(this).css('background-color', color);
	});

	$('#gengrid').click(function(){
		numsq = prompt("How many squares per side of the grid would you like?");
		side = 960/numsq + "px";
		
		$('#container').empty();
		for (i=1; i<((numsq * numsq) + 1); i++) {
			$('#container').append('<div id="sq"' + i + '></div>');	
		};

		$('#container > div').width(side);
		$('#container > div').height(side);

		$('#container > div').mouseenter(function(){
	 		$(this).css('background-color', color);
		});
	});

	$('#colorpick').click(function(){
		color = prompt("Pick a new color (red, blue, yellow or black)");

		$('#container > div').mouseenter(function(){
	 		$(this).css('background-color', color);
		});
	});

});

