export const metadata = {
	name: "bouncing dots and connections",
	description: "the first sketch. non-interactive."
}

export default (p) => {
	const pts = []

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.colorMode(p.HSB);
		p.background(0);
		p.stroke(255);

		for (let i = 0; i < 64; i++) {
			pts.push({
				pos: p.createVector(p.random(p.width), p.random(p.height)),
				vel: p.createVector(p.random(-4, 4), p.random(-4, 4)),
				lines: []
			});
		}
	}

	p.draw = () => {
		p.background(0);

		// loop to draw the line
		for (let i = 0; i < pts.length; i++) {
			const pt = pts[i];
			pt.lines = [];
			for (let iB = 0; iB < pts.length; iB++) {
				const ptB = pts[iB];

				// break out of loop, "optimizations"-ish
				if (ptB.pos.x === pt.pos.x && ptB.pos.y === pt.pos.y) { continue; }
				if (pt.lines.includes(iB)) { continue; }
				if (Math.abs(ptB.pos.x - pt.pos.x) > 250) { continue; }
				if (Math.abs(ptB.pos.y - pt.pos.y) > 250) { continue; }

				const distance = Math.sqrt(
					(Math.abs(ptB.pos.x - pt.pos.x) ^ 2) +
					(Math.abs(ptB.pos.y - pt.pos.y) ^ 2)
				);

				if (distance < 15) {
					p.stroke(p.color(100, 1.5 - (0.1 * distance)));
					p.strokeWeight(10 / distance);
					p.line(pt.pos.x, pt.pos.y, ptB.pos.x, ptB.pos.y);
					pt.lines.push(iB);
				}
			}
		}

		// another loop, so dots are drawn on top
		for (let i = 0; i < pts.length; i++) {
			const pt = pts[i];
			p.strokeWeight(10);
			p.stroke((pt.pos.x / p.width * 360), 100, 100);
			p.point(pt.pos.x, pt.pos.y);

			// move the dot
			pt.pos.x += pt.vel.x;
			pt.pos.y += pt.vel.y;

			// bouncing
			if (pt.pos.y < 0 || pt.pos.y > p.height) {
				pt.vel.y = -pt.vel.y;
			}
			if (pt.pos.x < 0 || pt.pos.x > p.width) {
				pt.vel.x = -pt.vel.x;
			}
		}
	}

	// resize window
	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	}
}