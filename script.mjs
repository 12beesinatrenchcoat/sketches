const sketchesListSelect = document.getElementById("sketches-list");
let currentSketch;
let currentSketchName = "";
import sketches from "./sketches.mjs";

Object.keys(sketches).reverse().forEach(year => {
	const optgroup = document.createElement("optgroup");
	optgroup.label = year;
	sketches[year].forEach(sketchName => {
		const option = document.createElement("option");
		option.textContent = sketchName;
		optgroup.append(option);
	})
	sketchesListSelect.append(optgroup);
})

console.log(sketches);

// Load the first sketch.
loadSketch(
	sketches[
		Object.keys(sketches).reverse()[0]
	][0]
);

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
	currentSketchName = sketchName;

	// setting page values
	document.getElementById("sketch-name").textContent = metadata.name;
	document.getElementById("sketch-description").textContent = metadata.description;
	
}

// Reloading.a
document.getElementById("reload-sketch").addEventListener("click", event => {
	loadSketch(currentSketchName);
	event.target.textContent = "reloaded!";
	setTimeout(() => {
		event.target.textContent = "reload sketch";
	}, 2500);
})

document.getElementById("hide-header").addEventListener("click", event => {
	const elements = document.querySelectorAll("header > * > *:not(nav), header > * > * > *:not(#hide-header)");
	const header = document.querySelector("header");
	if (event.target.dataset.hidden) {
		// already hidden, unhiding
		elements.forEach(element => {
			element.setAttribute("style", "opacity: 1");
		});
		header.removeAttribute("style")
		event.target.setAttribute("style", "opacity: 1")
		event.target.textContent = "hide header";
		event.target.dataset.hidden = "";
	} else { // hiding
		elements.forEach(element => {
			element.setAttribute("style", "opacity: 0");
		});
		event.target.setAttribute("style", "opacity: 0.5; border: 0; background: none")
		header.setAttribute("style", "backdrop-filter: none; background: none")
		event.target.textContent = "unhide";
		event.target.dataset.hidden = "true";
	}
})