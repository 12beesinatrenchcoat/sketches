export const metadata = {
	name: "Color Thing 3000",
	description: 'squares and colors. i guess i really like this kind of stuff, huh? migrated from Khan Academy (originally posted 2018 august 18).'
}

//Bored with the current color scheme? Type in some text in a comment or just restart the program to generate a new color scheme!

///CHANGES AS OF 8/18/2018
//Wow, it's been a year!
//Text can now be covered (and is also slightly more transparent.
//Made shadows' alpha value random.
//Made obscurities fill(0) (from fill(13,13,13))
//Made obscurities have a chance to appear. 
//Increased maximum random size.
//Brightened background slightly. (13 -> 24)

///CHANGES AS OF 8/2/17
//Added obscurites and shadows
//Made the text a solid color (for reasons)
//Code is now even more complicated

export default (p) => {
	/* Future Andy: this is new, added because Khan Academy usually does the setup function — but this isn't Khan Academy. Also the resize function. */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.background(24);
		p.noStroke();

		p.fill(255, 255, 255,196);
		p.text(rand2 +"+"+ rand3, 50, p.height - 50);
		p.frameRate(120);
	}
	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		p.background(24);
		p.noStroke();

		p.fill(255, 255, 255,196);
		p.text(rand2 +"+"+ rand3, 50, p.height - 50);
	}

	console.log(p);

	var rand2 = p.random(1,255);
	var rand3 = Math.round(p.random(0.5,2));

	p.draw = function() {
		//random values
		var randomX = p.random(p.width); //random X and y values 
		var randomY = p.random(p.height); // random 0 - size of "window"
		var rand1 = p.random(5,20); //random size
		
		//Shadow
		p.fill(0,0,0,p.random(8,32));
		p.rect(randomX-5, randomY-5, rand1+10, rand1+10);   
		
		//random color palette generator
		if (rand3 === 1){
			p.fill(rand2,randomX, randomY);
		} else {
			p.fill(randomX, randomY, rand2);
		}
		p.rect(randomX, randomY, rand1, rand1);
		
		//randomObsurities
		var obscureChance = p.random(0,100);
		if(obscureChance > 75){
			var rand1 = p.random(0,10);
			var randomX = p.random(p.width);
			var randomY = p.random(p.height);
			p.fill(0);
			p.rect(randomX, randomY, rand1, rand1);
		}
	};
}
