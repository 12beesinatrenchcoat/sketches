export const metadata = {
	name: "droplets",
	description: '“Creates blue "droplets" that fall from the top of the canvas to the bottom.” migrated from Khan Academy (originally posted 2018 August 18).'
}

/* [Project] Droplets - by Andy Chan, August 18, 2018
For Project: Make it Rain
Creates blue "droplets" that fall from the top of the canvas to the bottom.
Apologies for the messy code.
Made in: about 50 minutes */

/* Comment from the future, May 23, 2022
It's been… a very, very long time. I still think that this is one of my favorite projects on Khan Academy. Some code has been edited to work on the site, but other than that, older syntax and comments remain.
It's been a while, huh… */

export default (p) => {
	//Inital Variables
	var xPositions = [200,300,240,128];     // x position of droplet.
	var yPositions = [0,-5,-25,-300];       // y position of droplet.
	var ellipseSize = [10,15,30,15];     // size of droplet.
	var ellipseAlpha = [196,128,64,32];   // transparency of droplet
	var ySpeed = [0.01,0.02,0.03,0.04];        // rate at which droplet falls (exponentially increases.)

	//Adjustable settings! :D
	var eSzB = [5,25]; //The minimum and maximum size for a droplet.

	//Toggleable settings! O v O
	var dropletRandomX = true; //If true, make the droplet spawn at a different xPos each time.

	/* Future Andy: this is new, added because Khan Academy usually does the setup function — but this isn't Khan Academy. Also the resize function. */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
	}
	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	}

	p.draw = function() {
		p.background(0, 30, 196);
		p.fill(255, 255, 255);
		/* Future Andy: Text has been moved to the bottom left corner (from the top left). This is because of the header that may block it. */
		p.text(yPositions.length + " droplets",35,p.height - 35);
		p.text(Math.round(p.millis()/1000) + " seconds wasted",35,p.height - 50);

		for (var i = 0; i < xPositions.length; i++) {
			p.noStroke();
			p.fill(30, 204, 255,ellipseAlpha[i]);
			p.ellipse(xPositions[i], yPositions[i], ellipseSize[i], ellipseSize[i]);
			/* Debug: Shows ySpeed of each droplet. Looks bad. Uncomment to enable.
			fill(255, 0, 0);
			text(ySpeed[i],10,(i+1)*10);
			*/
			ySpeed[i] *= 1.01; //Exponentially increases ySpeed.
			ySpeed[i] += 0.01; //Also a linear increase, if you want
			yPositions[i] += ySpeed[i]; //Adds ySpeed to the yPosition (to move the droplet.)
			if(yPositions[i] > p.height){    //When yPosition exeeds the height of the canvas...
				yPositions[i] = -30;    //Reset yPosition to -30.

				ellipseSize[i] = p.random(eSzB[0],eSzB[1]);   //Random droplet size. Adjustable above.
				ySpeed[i] = p.random(ellipseSize[i]/10,ellipseSize[i]/7.5);   //Larger drop faster. Usually.
				ellipseAlpha[i] = p.random(32,196);
				if(dropletRandomX === true){        //Random xPosition upon "respawning."
					xPositions[i] = p.random(-p.width-5,p.width+5); //Toggleable above.
				}
				
			}
		}
		
	};

	p.mouseDragged = function(){          //When you click your mouse...
		xPositions.push(p.mouseX);        //Add a new variable to the xPositions (at your mouseX.)
		yPositions.push(p.mouseY);        //and the same with the yPositions (at mouseY, respectively.)
		ellipseSize.push(p.random(5,25)); //Random droplet size...
		ellipseAlpha.push(p.random(32,196)); //Random droplet transparency.
		ySpeed.push(p.random(0.5,3));     //Random initial droplet speed.
	};
}