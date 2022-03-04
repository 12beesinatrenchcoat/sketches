const sketchesListSelect = document.getElementById("sketches-list");
let currentSketch;

fetch("./sketches.json")
	.then(data => data.json())
	.then(json => {
		json = json.reverse();
		window.sketchesList = json;
		json.forEach(sketchName => {
			const option = document.createElement("option");
			option.textContent = sketchName;

			sketchesListSelect.append(option);
		})

		if (window.sketchesList.length > 0) {
			sketchesListSelect.disabled = false;
		}

		loadSketch(window.sketchesList[0]);
	})
	.catch(err => {
		console.error(err);
		alert("failed to get sketches list. check connection, and refresh.")
	})

sketchesListSelect.addEventListener("change", async event => {
	loadSketch(event.target.value);
})

async function loadSketch (sketchName) {
	// remove the old sketch
	if(currentSketch) {
		currentSketch.remove();
		currentSketch = null;
	}
	
	const { default: sketch, metadata } = await import("./sketches/" + sketchName);
	// and bringing in the new one
	currentSketch = new p5(sketch, "sketch-container");

	// setting page values
	document.getElementById("sketch-name").textContent = metadata.name;
}