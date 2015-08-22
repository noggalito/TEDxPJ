var end = new Date("09/21/2015")
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
		$(".ready").html("TEDxTalk is Ready")

		return
	}

	var days = Math.floor(distance / day)
	var hours = Math.floor( (distance  % day) / hour )
	var minutes = Math.floor((distance % hour ) / minute)
	var seconds = Math.floor( (distance % minute) /second )

	$(".counter").html("<div class='days'>" + days + " <span>dias</span> </div>" + "<div class='hours'>" + hours + " <span>horas</span> </div>" + "<div class='minutes'>" + minutes + " <span>minutos</span> </div>" + "<div class='seconds'>" + seconds + " <span>segundos</span> </div>"  )
}

timer = setInterval(showRemaining, 1000)
