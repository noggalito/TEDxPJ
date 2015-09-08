(function(){
	"use strict"

	var end = new Date("11/06/2015")
	var second = 1000
	var minute = second * 60
	var hour = minute * 60
	var day = hour * 24
	var timer

	function showRemaining() {
		var now = new Date()
		var distance = end - now

		if (distance < 0) {
			clearInterval(timer)
			$(".ready").html("TEDx ParqueJipiro es AHORA!!")

			return
		}

		var days = Math.floor(distance / day)
		var hours = Math.floor( (distance  % day) / hour )
		var minutes = Math.floor((distance % hour ) / minute)
		var seconds = Math.floor( (distance % minute) / second )

		$(".counter").html("<div class='days'> <span>" + days + "</span><span>dias</span></div>" + "<div class='hours'><span>" + hours + " </span><span>horas</span> </div>" + "<div class='minutes'><span>" + minutes + " </span><span>minutos</span> </div>" + "<div class='seconds'><span>" + seconds + " </span><span>segundos</span> </div>")
	}

	timer = setInterval(showRemaining, 1000)

})();
