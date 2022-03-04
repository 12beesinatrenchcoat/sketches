// creates sketches.json
const { readdirSync, writeFileSync } = require('fs');

const files = readdirSync("./sketches")

try {
	writeFileSync("./sketches.json", JSON.stringify(files));
	console.log("sketches.json created!");
} catch(err) {
	console.error(err);
}


console.log(files);