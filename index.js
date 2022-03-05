// creates sketches.json
const { readdirSync, writeFileSync } = require('fs');

const files = readdirSync("./sketches")

const groupedFiles = files.reduce((object, date) => {
	const year = date.slice(0, 4);
	object[year] = object[year] || [];
	object[year].unshift(date);
	return object;
}, {});

try {
	const contents = "export default " + JSON.stringify(groupedFiles);
	console.log(contents);
	writeFileSync("./sketches.mjs", contents);
	console.log("sketches.mjs created!");
} catch(err) {
	console.error(err);
}