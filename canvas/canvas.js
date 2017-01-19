/**
 * canvas.js file
 */

(function($){
	var color = $(".selected").css("background-color");
	$('#newColor').click(function(event){
		$('.rangeControl').toggle()
	});
	
	$("ul li").click(function(event){
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
})(jQuery);