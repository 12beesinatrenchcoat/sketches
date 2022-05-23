export const metadata = {
	name: "storm tied to gyroscope",
	description: "i liked the rotation properties. (requires a gyroscope, tilt your device!)"
}

export default (p) => {
	const {abs, min, sign} = Math;

	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight);
		p.background(0);
		p.colorMode(p.RGB, 255, 255, 255, 1);
		p.frameRate(120);
		p.noStroke();
	}

	const balls = []

	for (let i = 0; i < 750; i++) {
		balls.push(
			{
				pos: p.createVector(
					p.random(window.innerWidth),
					p.random(window.innerHeight)
				),
				rot: p.createVector(0, 0),
				size: p.random(10, 25)
			}
		)
	}
	


	p.draw = () => {
		p.background(0, 0, 0, 0.5);
		for (let ball of balls) {
			const {pos, rot, size} = ball;

			p.ellipse(pos.x, pos.y, abs(rot.x) + size, abs(rot.y) + size);

			const colSpd = abs(rot.x) + abs(rot.y);
			p.fill(
				colSpd * 8, colSpd * 8, colSpd * 16
			);

			rot.set(
				curve(p.rotationX, size / 10),
				curve(-p.rotationY, size / 10)
			);

			pos.sub(rot);

			if (pos.x > window.innerWidth + 25) { pos.x = -25 }
			if (pos.x < -25) { pos.x = window.innerWidth + 25 }
			if (pos.y > window.innerHeight + 25) { pos.y = -25 }
			if (pos.y < -25) { pos.y = window.innerHeight + 25 }
		}

	}

	p.windowResized = () => {
		p.resizeCanvas(window.innerWidth, window.innerHeight);
	}

	function curve (number, divisor = 1.5) {
		number -= min(2, abs(number)) * sign(number)
		number -= min(4, abs(number)) * 0.5 * sign(number)
		number /= divisor
	
		return number;
	}
}