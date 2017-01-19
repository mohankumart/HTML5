/**
 * canvas.js file
 */

(function($){
	var color = $(".selected").css("background-color");
	var $canvas = $("canvas");
	var context = $canvas[0].getContext("2d");
	var mouseDown = false;
	$('#newColor').click(function(event){
		$('.rangeControl').toggle()
	});
	
	$("ul").on('click', "li", function(event){
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
		color = $(this).css("background-color");
	});
	
	function changeColor(){
		var r = $("#red").val();
		var b = $("#blue").val();
		var g = $("#green").val();
		$('.dynamicColor').css('background-color',"rgb("+r+","+g+","+b+")");
	}
	changeColor()
	$("input[type=range]").change(changeColor);
	
	$("#addcolor").click(function(){
		var $newcolor = $("<li></li>");
		$newcolor.css('background-color',$('.dynamicColor').css('background-color')).addClass('rounded');
		$("ul").append($newcolor);
		$newcolor.click();
	});
	
	//draw lines
	$canvas.mousedown(function(e){
		lastEvent = e;
		mouseDown = true;
	}).mousemove(function(e){
		if(mouseDown){
			context.beginPath();
			context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.strokeStyle = color;
			context.stroke();
			lastEvent = e;
		}
	}).mouseup(function(){
		mouseDown = false;
	}).mouseleave(function(){
		$canvas.mouseup();
	});
	
	
	
})(jQuery);