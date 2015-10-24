document.addEventListener("DOMContentLoaded", startFunction);


function startFunction(){

var getDiv = document.getElementById("movingDiv");
getDiv.addEventListener("click", pressToMoveRight);

}

function pressToMoveRight() {
	var getDiv = document.getElementById("movingDiv");
	var counter = 0
	function move() {
		counter++;
		getDiv.style.marginLeft = counter + 'px'
		//changeColor(counter);
		if (counter == 100) {
			clearInterval(id); 
			getDiv.removeEventListener("click", pressToMoveRight);
			getDiv.addEventListener("click", pressToMoveDown);
		}
	}

	var id = setInterval(move, 10);

}

function pressToMoveDown() {
	var getDiv = document.getElementById("movingDiv");
	var counter = 0;
	function move() {
		counter++;
		getDiv.style.marginTop = counter + 'px'
	//	changeColor(counter);
		if (counter == 100) {
			clearInterval(id);
			getDiv.removeEventListener("click", pressToMoveDown);
			getDiv.addEventListener("click", pressToMoveLeft); 
		}
	}

	var id = setInterval(move, 10);

}

function pressToMoveLeft() {
	var getDiv = document.getElementById("movingDiv");
	var counter = getDiv.style.marginLeft;
	var newCounter = counter.substr(0,3)
	function move() {
		newCounter--;
		getDiv.style.marginLeft = newCounter + 'px'
	//	changeColor(counter);
		if (newCounter == 0) {
			clearInterval(id);
			getDiv.removeEventListener("click", pressToMoveLeft);
			getDiv.addEventListener("click", pressToMoveUp); 
		}
	}

	var id = setInterval(move, 10);

}

function pressToMoveUp() {
	var getDiv = document.getElementById("movingDiv");
	var counter = getDiv.style.marginTop;
	var newCounter = counter.substr(0,3);
	function move() {
		newCounter--;
		getDiv.style.marginTop = newCounter + 'px'
	//	changeColor(counter);
		if (newCounter == 0) {
			clearInterval(id);
			getDiv.removeEventListener("click", pressToMoveUp);
			getDiv.addEventListener("click", pressToMoveRight); 
		}
	}

	var id = setInterval(move, 10);

}

function changeColor(position) {
	var getDiv = document.getElementById("movingDiv");
	if (position <= 100)
		getDiv.style.borderColor = "red";
	else if (position > 100 && position <= 300)
		getDiv.style.borderColor = "blue";
	else
		getDiv.style.borderColor = "green";
}