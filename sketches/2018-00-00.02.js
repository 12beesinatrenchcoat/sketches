export const metadata = {
	name: "lines",
	description: "curves. i guess. still don't really get why i made this… edgy? maybe? in a 600 x 600 canvas; migrated from Khan Academy (originally posted 2018… unknown date, though)."
}

export default (p) => {
/* Future Andy: this is new, added because Khan Academy usually does the setup function — but this isn't Khan Academy. Also the resize function. */
	p.setup = () => {
		p.createCanvas(600, 600);
		p.background(0, 0, 0);
		p.frameRate(30);
	}

	p.draw = function() {
		p.fill(0,0,0,p.random(55,110));
		var strokeWidth = p.random(1,5);
		var a = p.random(0,600);
		var b = p.random(0,600);
		var c = p.random(0,600);
		var d = p.random(0,600);
		var e = p.random(0,600);
		var f = p.random(0,600);
		p.stroke(255, 255, 255);
		p.arc(a,b,c,d,e,f);
		p.arc(f,e,d,c,b,a);
		p.stroke(0, 0, 0,100);
		p.strokeWeight(strokeWidth);
		var a = p.random(0,600);
		var b = p.random(0,600);
		var c = p.random(0,600);
		var d = p.random(0,600);
		p.line(a,b,c,d);
		p.line(c,d,b,a);
	};
}