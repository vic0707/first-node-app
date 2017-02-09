const https = require('https');
const username = "chalkers";

// function to print message to console
function printMessage(username, badgeCount, point) {
	const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript`;
	console.log(message);
}

// printMessage("vic0707", 100, 20000);

function getProfile(username) {
	// Connect to the API URL
	const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
		// console.log(response.statusCode);
		let body = "";
		response.on('data', data => {
			body += data.toString();
		});
		response.on('end', () => {
			const profile = JSON.parse(body);
			printMessage(username, profile.badges.length, profile.points.JavaScript);
			// console.dir(profile);
			// console.log(body);
		});
	});
}

const users = ["chalkers", "alenaholligan"];
users.forEach(getProfile);
// getProfile("alenaholligan");
