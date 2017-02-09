const https = require('https');
const username = "victormaciascastillo";

// function to print message to console
function printMessage(username, badgeCount, point) {
	const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript`;
	console.log(message);
}

printMessage("vic0707", 100, 20000);

// Connect to the API URL
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
	console.dir(response);
});