$(function(){
		var i = 0;
		$('#cow').on('click', function(){
			i++;
			var cowClick = document.getElementById("counter").innerHTML = "Click Counter = " + i;
		})
});

