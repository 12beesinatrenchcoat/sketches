export const metadata = {
	name: "letterstorm",
	description: "it's raining text! type characters, space or enter to end word."
}

let auto = false;
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ";
// <3 https://stackoverflow.com/a/60963711
characters = [...characters].sort(() => Math.random() - .5).join('');
console.log(characters);

let font;

const charactersLength = characters.length;

export default (p) => {
	let width = p.windowWidth;
	let height = p.windowHeight;
	let words = [];
	class Word {
		constructor(x, y) {
			this.x = x || p.random(-50, width - 10);
			this.y = y || p.random(100, 200);
			this.rot = 0;
			this.speed = 0;
			this.word = "";
			this.length = 0;
			this.size = (Math.random() * 12) + 14;
			this.falling = false;
			this.freezeAt = p.random(-50, 10);

			this.update = () => {
				if (this.falling) {
					this.speed
						= this.speed >= 3 + this.length / 4
							? this.speed
							: this.speed + this.size / 100;
					this.y += this.speed;

					if (this.y > p.height + this.freezeAt) {
						// words.splice(words.indexOf(this), 1);
						this.falling = false;
						console.debug('word "' + this.word + '" frozen');
					}
				}
			};

			this.rot *= 1.005

			this.display = () => {
				p.textSize(this.size);
				// Translating to preserve position in rotation
				p.push();
				p.translate(this.x, this.y)
				p.rotate(this.rot);
				p.text(this.word, 0, 0);
				p.pop();
			};
		}
	}
	words.push(new Word());

	p.preload = () => {
		font = p.loadFont("/fonts/JetBrainsMono-Regular.ttf")
	}

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.frameRate(60);
		p.fill("#222d");
		p.textAlign(p.LEFT)
		p.textFont(font);
		p.angleMode(p.DEGREES)
	}

	p.draw = () => {
		p.background("#ffd")
		for (const word of words) {
			word.update();
			word.display();
		}

		const bounds = font.textBounds(words[0].word, words[0].x, words[0].y, words[0].size)

		p.rect(
			bounds.x + bounds.w + (words[0].size / 6),
			bounds.y - 1,
			0.5,
			bounds.h + 2
		);

		// Auto mode! 
		if (auto) {
			if (Math.random() < 0.8) {
				const start = Math.floor(Math.random() * charactersLength)
				p.key = characters.charAt(start);
			} else {
				p.key = "Enter";
			}
			p.keyTyped();
		}
	}

	p.keyTyped = () => {
		words[0].length = words[0].word.length
		if (p.key === "Enter") {
			if (words[0].word.length === 0) {
				return false;
			}
			makeFirstWordFall();
			words.unshift(new Word())
		} else if (p.key === " ") {
			makeFirstWordFall();
			const word = new Word(words[0].x + (words[0].length * (words[0].size / 1.5)), words[0].y);
			words.unshift(word);
		} else {
			words[0].word += p.key
		}
	}

	function makeFirstWordFall() {
		words[0].falling = true;
		words[0].speed = (-10 / ((words[0].length + 1))) - 2
		words[0].rot = p.random(-10, 10)
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		width = p.windowWidth;
		height = p.windowHeight;
	}
}

window.toggleAuto = () => {
	auto = !auto;
	return auto;
}