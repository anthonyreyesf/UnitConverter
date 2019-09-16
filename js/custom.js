function convertCetoFa() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "\xB0C";
	document.getElementById("output").innerHTML = ((x * (9/5)) + 32).toFixed(2) + "\xB0F";
}

function convertFatoCe() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "\xB0F";
	document.getElementById("output").innerHTML = ((x - 32) * 5/9).toFixed(2) + "\xB0C";
}

function convertFetoMe() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "ft";
	document.getElementById("output").innerHTML = (x / 3.281).toFixed(2) + "m";
}

function convertMetoFe() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "m";
	document.getElementById("output").innerHTML = (x * 3.281).toFixed(2) + "ft";
}

function convertIntoCe() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "in";
	document.getElementById("output").innerHTML = (x * 2.54).toFixed(2) + "cm";
}

function convertCetoIn() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "cm";
	document.getElementById("output").innerHTML = (x / 2.54).toFixed(2) + "in";
}

function convertPotoKi() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "lbs";
	document.getElementById("output").innerHTML = (x / 2.2046).toFixed(2) + "kg";
}

function convertKitoPo() {
	var x = document.getElementById("unitNumber").value;
	document.getElementById("input").innerHTML = x + "kg";
	document.getElementById("output").innerHTML = (x * 2.2046).toFixed(2) + "lbs";
}

function resetFocus() {
	document.getElementById("unitNumber").focus();
}

