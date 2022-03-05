export const metadata = {
	name: "rays",
	description: "i thought giving line endings a velocity would be fun. click and drag."
}

export default (p) => {
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.background(255);
		p.colorMode(p.RGB, 255, 255, 255, 1);
		p.frameRate(120);
	}

	let rays = [];

	p.mouseDragged = () => {
		const pos = p.createVector(p.mouseX, p.mouseY);
		const vel = p.createVector(
			p.random(-5, 5) + (p.mouseX - p.pmouseX) / 2,
			p.random(-5, 5) + (p.mouseY - p.pmouseY) / 2
		);

		const ray = {
			start: pos.copy(),
			end: pos.copy(),
			startVel: vel.copy(),
			vel: vel.copy(),

			startColor: [Math.abs(vel.x * 16), Math.abs(vel.y * 24), 255, 1],
			finalColor: [Math.abs(vel.x * 8), Math.abs(vel.y * 12), 255, p.random(0.1, 1)],

			startWidth: 1 + ((Math.abs(vel.x) + Math.abs(vel.y))),
			finalWidth: 1 + ((Math.abs(vel.x) + Math.abs(vel.y)) / 24)
		};
		rays.push(ray)
	}

	p.draw = () => {
		p.background(0);
		rays.forEach(ray => {
			if (ray.vel) {
				const { end, startVel, vel, startColor, finalColor, startWidth, finalWidth } = ray;
				end.x += vel.x;
				end.y += vel.y;

				let progress = 1 - (((vel.x / startVel.x) + (vel.y / startVel.y)) / 2)

				if (Math.abs(vel.x) + Math.abs(vel.y) < 0.001) {
					ray.vel = false;
					console.debug("vel canceled");
				} else {
					// slowing down the rays
					vel.mult(0.85);
				}


				p.strokeWeight((startWidth * (1 - progress)) + (finalWidth * progress));
				p.stroke(p.color(
					startColor.map((s, i) => {
						return (s * (1 - progress)) + (finalColor[i] * progress)
					})
				));
			} else {
				p.stroke(ray.finalColor);
				p.strokeWeight(ray.finalWidth);
			}

			p.line(ray.start.x, ray.start.y, ray.end.x, ray.end.y);
		});
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	}
}
