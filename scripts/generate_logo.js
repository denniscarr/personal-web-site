var stringLength = 90;
var logoChars = [];

// Generate a string.
for (var i = 0; i < stringLength; i++) {
	var rand = Math.random();
	if (rand >= 0.66) logoChars.push(".");
	else if (rand >= 0.33) logoChars.push("^");
	else logoChars.push("&nbsp");
}

// Pick a point to insert the 'ihavefivehat' link
var insertIndex = Math.floor(Math.random()*stringLength-1);
logoChars.splice(insertIndex, 0, "<a href='index.html'>ihavefivehat</a>");

document.getElementById("logo_string").innerHTML = logoChars.join('');