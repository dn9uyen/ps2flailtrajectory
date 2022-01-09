dxi = 0;
dyi = 0;
autoGuess = false

function dxInput() {
	dxi = Number(document.getElementById("dxi").value);
	console.log(dxi);
	if (dyi != 0) {
		calculate(dxi, dyi, autoGuess);
	}
	
}
function dyInput() {
	dyi = Number(document.getElementById("dyi").value);
	if (dxi != 0) {
		calculate(dxi, dyi, autoGuess);
	}
	if (autoGuess && Number(document.getElementById("final").value) != 0) {
		finalInput();
	}
}

function finalInput() {
	finali = Number(document.getElementById("final").value);

	const tests = [0]
	let lowestDiff = Math.abs(finali - tests);
	let curr = 0;
	if (dyi != 0) {
		for (let i=100; i<600; i++) {
			tests.push(calculate(i, dyi, autoGuess)[0]);
		}
		for (let i=0; i<tests.length; i++) {
			let currentDiff = Math.abs(finali-tests[i]);
			if (Math.abs(currentDiff) < Math.abs(lowestDiff)) {
				lowestDiff = currentDiff;
				curr = i+100;
			}
		}

		let values = calculate(curr, dyi, true);
		document.getElementById("flightTime").innerHTML = values[1].toFixed(3) + " s";
		document.getElementById("angle").innerHTML = values[2].toFixed(3) + " deg"
		document.getElementById("dxiRow").innerHTML = curr.toFixed(2) + " m";

	}
}

function quadratic(a, b, c) {
	// Solve for roots with quadratic formula
	// (-b+-sqrt(b^2-4ac))/2a
	//let plusRoot = ((-1*b) + Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
	let minusRoot = ((-1*b) - Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
	//let theta = Math.atan(minusRoot) * (180 / Math.PI) // Convert radian to degree
	return(minusRoot);
}

function calculate(dx, dy, autoGuess) {

	let vs  = 175; // velocity of shell
	let ay = -40; // gravity

	let a = .5*ay*((dx/vs)**2);
	let b = dx
	let c = .5*ay*((dx/vs)**2) - dy
	let thetaRad = Math.atan(quadratic(a, b, c))
	

	// Calculate impact on ground
	vy = vs * Math.sin(thetaRad); // Vertical velocity component
	vx = vs * Math.cos(thetaRad); // Horizontal velocity component
	let flightTime = quadratic(.5*ay, vy, 0);
	let finalImpact = vx * flightTime;
	let finalAngle = thetaRad * 180 / Math.PI;

	if (autoGuess == false) {
		document.getElementById("finalRow").innerHTML = finalImpact.toFixed(2) + " m";
		document.getElementById("flightTime").innerHTML = flightTime.toFixed(3) + " s";
		document.getElementById("angle").innerHTML = finalAngle.toFixed(3) + " deg";
	}
	else {
		return [finalImpact, flightTime, finalAngle];
	}
}