export const metadata = {
	name: "colorful ellipses",
	description: "rainbow ellipses. kind of reminds me of color thing 3000 (2018-08-18.02.js) migrated from OpenProcessing (originally posted 2022 January 5, untitled, as a draft)."
}

export default (p) => {
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
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
		const x = random ? Math.random() * p.windowWidth : p.mouseX;
		const y = random ? Math.random() * p.windowHeight : p.mouseY;
		const aspectRatio = p.windowWidth / p.windowHeight;
		
		p.background(0, 0, 0, 0.01);
		
		p.fill(
			((x + y) / 2) / p.windowWidth * 360,
			50, 
			100 - ((((x + y) / 2) / p.windowHeight) * 10),
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
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		p.background(16);
	}
}