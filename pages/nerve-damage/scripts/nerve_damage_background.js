var stringLength = 40000;

setInterval(generateText, 70);

function generateText() {
	var logo = "";
	
	// Generate a string.
	for (var i = 0; i < stringLength; i++) {
		var rand = Math.random();
		if (rand >= 0.85) logo += "-";
		else if (rand >= 0.75) logo += "_";
		else logo += "&nbsp;";
	}

	document.getElementById("background_string").innerHTML = logo;
}