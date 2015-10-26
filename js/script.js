document.addEventListener("DOMContentLoaded", startFunction);


function startFunction(){

var getDiv = document.getElementById("movingDiv");
getDiv.addEventListener("click", pressToMoveRight);

}

function pressToMoveRight() {
	var getDiv = document.getElementById("movingDiv");
	getDiv.removeEventListener("click", pressToMoveRight);
	var counter = 0
	function move() {
		counter++;
		getDiv.style.marginLeft = counter + 'px'
	changeColorWhileRightDown(counter);
		if (counter == 500) {
			clearInterval(id); 
			getDiv.addEventListener("click", pressToMoveDown);
		}
	}

	var id = setInterval(move, 10);

}

function pressToMoveDown() {
	var getDiv = document.getElementById("movingDiv");
	getDiv.removeEventListener("click", pressToMoveDown);
	var counter = 0;
	function move() {
		counter++;
		getDiv.style.marginTop = counter + 'px'
	changeColorWhileRightDown(counter);
		if (counter == 500) {
			clearInterval(id);
			getDiv.addEventListener("click", pressToMoveLeft); 
		}
	}

	var id = setInterval(move, 10);

}

function pressToMoveLeft() {
	var getDiv = document.getElementById("movingDiv");
	getDiv.removeEventListener("click", pressToMoveLeft);
	var counter = getDiv.style.marginLeft;
	var newCounter = counter.substr(0,3)
	function move() {
		newCounter--;
		getDiv.style.marginLeft = newCounter + 'px'
	changeColorWhileLeftUp(newCounter);
		if (newCounter == 0) {
			clearInterval(id);
			getDiv.addEventListener("click", pressToMoveUp); 
		}
	}

	var id = setInterval(move, 10);

}

function pressToMoveUp() {
	var getDiv = document.getElementById("movingDiv");
	getDiv.removeEventListener("click", pressToMoveUp);
	var counter = getDiv.style.marginTop;
	var newCounter = counter.substr(0,3);
	function move() {
		newCounter--;
		getDiv.style.marginTop = newCounter + 'px'
	changeColorWhileLeftUp(newCounter);
		if (newCounter == 0) {
			clearInterval(id);
			getDiv.addEventListener("click", pressToMoveRight); 
		}
	}

	var id = setInterval(move, 10);

}

function changeColorWhileRightDown(position) {
	var getDiv = document.getElementById("movingDiv");
	if (position <= 100)
		getDiv.style.backgroundColor = "red";
	else if (position > 100 && position <= 300)
		getDiv.style.backgroundColor = "blue";
	else
		getDiv.style.backgroundColor = "green";
}

function changeColorWhileLeftUp(position) {
	var getDiv = document.getElementById("movingDiv");
	if (position >= 300)
		getDiv.style.backgroundColor = "red";
	else if (position < 300 && position >= 100)
		getDiv.style.backgroundColor = "blue";
	else
		getDiv.style.backgroundColor = "green";
}