export const metadata = {
	name: "Car Thing",
	description: "you know those framerate test things? that's probably what i was inspired by here. 600 x 400 canvas. migrated from Khan Academy, originally published… 2018??"
}

export default (p) => {
	var c1spd = 5; //Speed of the red car
	var c2spd = 10; //Speed of the green car
	var c3spd = 20; //Speed of the blue car

	p.setup= () => {
		p.createCanvas(600, 400);
		p.noStroke();
		p.frameRate(30);
	}
	var x = 11; // position of the car
	var xB = 11; // position of car 2
	var xC = 11; // position of car 3

	var cA = 0;
	var cB = 0;
	var cC = 0;


	p.draw = function() {
	p.background(252, 255, 214);
	p.fill(0, 0, 0);
	p.textFont("monospace", 48);
	p.text("Car Thing",25,50);
	p.textFont("times",32);
		// draw the car body
		p.fill(255, 0, 0);
		p.rect(x, 100, 100, 20);
		p.rect(x + 15, 78, 70, 40);
		
		// draw the wheels
		p.fill(77, 66, 66);
		p.ellipse(x + 25, 121, 24, 24);
		p.ellipse(x + 75, 121, 24, 24);
		
		
		

		x = x + c1spd;
		
		if(x > 700){
			x = -95;
			cA = cA+1;
		}
		p.fill(0, 0, 0);
		p.text(cA,x+30,105);
		
		p.textSize(18);
		p.text(c1spd+" pixels/frame", x, 70);
		
	//car II
		// the body (again)
		p.fill(0, 255, 0);
		p.rect(xB, 200, 100, 20);
		p.rect(xB + 15, 178, 70, 40);
		
		// more wheels 
		p.fill(77, 66, 66);
		p.ellipse(xB + 25, 221, 24, 24);
		p.ellipse(xB + 75, 221, 24, 24);
		
	p.textSize(32);
	p.fill(0, 0, 0);
		p.text(cB,xB+30,205);
		
		
		
		//some conditionals and other variables
		xB = xB + c2spd;
		
		if(xB > 700){
			xB = -95;
			cB = cB + 1;
		}
		p.textSize(18);
		p.text(c2spd+" pixels/frame",xB,205-35);
		
		//car III: The Car Strikes Back... Or not
		// the body (again(again))
		p.fill(0, 0, 255);
		p.rect(xC, 300, 100, 20);
		p.rect(xC + 15, 278, 70, 40);
		
		// more wheels (there's now 6)
		p.fill(77, 66, 66);
		p.ellipse(xC + 25, 321, 24, 24);
		p.ellipse(xC + 75, 321, 24, 24);
		
		
		
		//some conditionals and other variables
		xC = xC + c3spd;
		
		if(xC > 700){
			xC = -95;
			cC = cC + 1;
		}
		
		p.textSize(32);
		p.fill(255, 255, 255);
		p.text(cC,xC+30,305);
		
	p.textSize(18);
	p.fill(0, 0, 0);
	p.text(c3spd+" pixels/frame",xC,305-35);

	var sec = p.millis()/1000;
	p.text(sec+" seconds since opening this program" ,10,395);
};

}
