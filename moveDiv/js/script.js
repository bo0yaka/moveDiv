function pressToMove() {

	var counter = 0
	function move() {
		counter++;
		document.getElementById("movingDiv").style.marginLeft = counter + 'px'
		changeColor(counter);
		if (counter == 500) {
			clearInterval(id) 
		}
	}

	var id = setInterval(move, 10);

}

function changeColor(position) {

	if (position <= 100)
		document.getElementById("movingDiv").style.borderColor = "red";
	else if (position > 100 && position <= 300)
		document.getElementById("movingDiv").style.borderColor = "blue";
	else
		document.getElementById("movingDiv").style.borderColor = "green";
}