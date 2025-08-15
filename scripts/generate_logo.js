var stringLength = 86;
var logo = "";

// Generate a string.
for (var i = 0; i < stringLength; i++) {
	var rand = Math.random();
	if (rand >= 0.66) logo += ".";
	else if (rand >= 0.33) logo += "^";
	else logo += " ";
}

// Pick a point to insert 'ihavefivehat'
var insertIndex = Math.floor(Math.random()*stringLength-1);

// Insert it
logo = logo.slice(0, insertIndex) + "<a href='index.html'>ihavefivehat</a>" + logo.slice(insertIndex);		

document.getElementById("logo_string").innerHTML = logo;