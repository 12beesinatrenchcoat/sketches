export const metadata = {
	name: "colorful ellipses",
	description: "rainbow ellipses. kind of reminds me of color thing 3000 (2018-08-18.02.js) migrated from OpenProcessing (originally posted 2022 January 5, untitled, as a draft)."
}

export default (p) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight);
		p.colorMode(p.HSB);
		p.noStroke();
		p.background(16);
	}

	let random = true;

	if (!random) {
		p.ellipseMode(CORNERS);
	}

	let pX;
	let pY;

	p.draw = () => {
		const x = random ? Math.random() * window.innerWidth : p.mouseX;
		const y = random ? Math.random() * window.innerHeight : p.mouseY;
		const aspectRatio = window.innerWidth / window.innerHeight;
		
		p.background(0, 0, 0, 0.01);
		
		p.fill(
			((x + y) / 2) / window.innerWidth * 360,
			50, 
			100 - ((((x + y) / 2) / window.innerHeight) * 10),
			0.8
		);
		
		const dirX = p.mouseX < p.pmouseX ? 1 : -1
		const dirY = p.mouseY < p.pmouseY ? 1 : -1
		
		if (random) {	
			p.ellipse(
				x, y, 
				Math.abs(x - pY) / (10 * aspectRatio) + 20,
				Math.abs(y - pY) / 10 + 20
			);
		} else {
			p.ellipse(
				x - (dirX * 10), 
				y - (dirY * 10),
				pX + (dirX * 10), 
				pY + (dirY * 10)
			);
		}	

		pX = x;
		pY = y;
	}

	p.windowResized = () => {
		p.resizeCanvas(window.innerWidth, window.innerHeight);
		p.background(16);
	}
}