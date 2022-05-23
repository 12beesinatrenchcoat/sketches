export const metadata = {
	name: "ball",
	description: 'a bouncing ball. probably my first experiment with physics.migrated from Khan Academy, originally published… 2019??'
}

export default (p) => {
	var f;
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		/* Future Andy: Originally used "createFont", but that's not a thing in p5js, I guess. Also now using JetBrains Mono instead of "monospace" because it gave me an error ;-; */
		f = p.loadFont("/fonts/JetBrainsMono-Regular.ttf");
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	}

	    //Initial Variables
		var eX = 300;
		var eY = 300;
		var eXs = 50;
		var eYs = 50;
		var spd = 1;
		var spdInc = 0.13;
		var spdsv;
		var b1X = 300;
		var b1Y = 300;
	p.draw = function() {
		
		p.background(242, 242, 242);
		p.fill(0, 0, 0);
		p.line(0,p.height - 50,p.width,p.height - 50);
		p.ellipse(eX,eY,eXs,eYs);
		
	
		if (eY > p.height - 75){
		 spd = -Math.abs(spd)*0.95; 
		 spdInc = 0;
		}
		
		if(Math.abs(spd) < 0.55){
			spd = 0;
		}
		
		if(p.mouseIsPressed){
			eX = p.mouseX;
			eY = p.mouseY;
			spdsv = spd;
			spd = 0;
			spdInc = 0;
		}
	
	
	
	
	spd = spd+spdInc;
	
		eY = eY + spd;
		spdInc = spdInc ^ 1.000001;
		p.textFont(f,18);
		p.text("eY = "+ Math.round(eY*1000)/1000,50,p.height - 125);
		p.text("spd ≈ "+Math.round(spd*10)/10,50, p.height - 100);
		if(p.millis()/1000 > 60){
			p.text(Math.round(p.millis()/1000/60*100000)/100000 + " minutes spent here",50,p.height - 75);
		}else{ 
			p.text(p.millis()/1000 + " seconds spent here",50,p.height - 75);
		}
	
		
	
	};
	
	
	p.mouseReleased = function(){
		spd = spdsv/2;
		spdsv = 0;
		spdInc = 0.05;
	};
}