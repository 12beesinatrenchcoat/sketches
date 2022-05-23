export const metadata = {
	name: "tri",
	description: "something about triangles?? I think I was really into Raven Kwok's work at the time (check it out, it's cool!) in a 600 x 600 canvas; migrated from Khan Academy (originally posted 2018… unknown date, though)."
}

export default (p) => {
/* Future Andy: this is new, added because Khan Academy usually does the setup function — but this isn't Khan Academy. Also the resize function. */
	p.setup = () => {
		p.createCanvas(600, 600);
		p.background(0, 0, 0);
		p.frameRate(30);
	}

	var a = p.random(300,600);
	var b = p.random(300,600);
	var c = p.random(300,600);
	var d = p.random(300,600);
	var e = p.random(300,600);
	var f = p.random(0,600);
	var g = p.random(0,600);
	var h = p.random(0,300);
	var i = p.random(0,300);
	var j = p.random(0,300);
	var k = p.random(0,300);
	var l = p.random(0,300);
	var arcA = p.random(0,360);
	var arcB = p.random(0,360);
	var arcC = p.random(0,360);
	var arcD = p.random(0,360);
   	var spd = 0;

	p. draw= function() {
		p.background(255, 255, 255);
		p.fill(235, 235, 235);
		p.triangle(a,b,c,d,e,f);
		p.triangle(a,c,d,e,f,b);
		p.triangle(a,d,e,f,b,c);
		p.triangle(a,e,f,b,c,d);
		p.triangle(a,f,b,c,d,e);
		p.triangle(b,c,d,e,f,a);
		p.triangle(b,d,e,f,a,c);
		p.triangle(b,e,f,a,c,d);
		p.triangle(b,f,a,c,d,e);
		p.triangle(c,a,b,d,e,f);
		p.triangle(c,b,d,e,f,a);
		p.triangle(c,d,e,f,a,b);
		p.triangle(c,e,f,a,b,d);
		p.triangle(c,f,a,b,d,e);
		p.triangle(d,a,b,c,e,f);
		p.triangle(d,b,c,e,f,a);
		p.triangle(d,c,e,f,a,b);
		p.triangle(d,e,f,a,b,c);
		p.triangle(d,f,a,b,c,e);
		p.triangle(e,a,b,c,d,f);
		p.triangle(e,b,c,d,f,a);
		p.triangle(e,c,d,f,a,b);
		p.triangle(e,d,f,a,b,c);
		p.triangle(e,f,a,b,c,d);
		p.triangle(f,a,b,c,d,e);
		p.triangle(f,b,c,d,e,a);
		p.triangle(f,c,d,e,a,b);
		p.triangle(f,d,e,a,b,c);
		p.triangle(f,e,a,b,c,d);
		p.triangle(g,h,i,j,k,l);
		p.triangle(g,i,j,k,l,h);
		p.triangle(g,j,k,l,h,i);
		p.triangle(g,k,l,h,i,j);
		p.triangle(g,l,h,i,j,k);
		p.triangle(h,i,j,k,l,g);
		p.triangle(h,j,k,l,g,i);
		p.triangle(h,k,l,g,i,j);
		p.triangle(h,l,g,i,j,k);
		p.triangle(i,g,h,j,k,l);
		p.triangle(i,h,j,k,l,g);
		p.triangle(i,j,k,l,g,h);
		p.triangle(i,k,l,g,h,j);
		p.triangle(i,l,g,h,j,k);
		p.triangle(j,g,h,i,k,l);
		p.triangle(j,h,i,k,l,g);
		p.triangle(j,i,k,l,g,h);
		p.triangle(j,k,l,g,h,i);
		p.triangle(j,l,g,h,i,k);
		p.triangle(k,g,h,i,j,l);
		p.triangle(k,h,i,j,l,g);
		p.triangle(k,i,j,l,g,h);
		p.triangle(k,j,l,g,h,i);
		p.triangle(k,l,g,h,i,j);
		p.triangle(l,g,h,i,j,k);
		p.triangle(l,h,i,j,k,g);
		p.triangle(l,i,j,k,g,h);
		p.triangle(l,j,k,g,h,i);
		p.triangle(l,k,g,h,i,j);
		p.triangle(d,b,g,c,g,l);
		p.triangle(b,i,l,k,l,i);
		p.triangle(h,k,a,l,g,c);
		p.triangle(j,c,j,c,e,c);
		p.triangle(c,f,c,h,f,f);
		p.triangle(a,l,a,i,a,f);
		p.triangle(e,b,l,i,l,e);
		p.triangle(g,k,l,e,l,k);
		p.fill(255, 255, 255,0);
		p.arc(d,j,l,k,arcA,arcB);
		p.arc(i,k,d,b,arcA,arcC);
		p.arc(d,j,d,k,arcA,arcD);
	};

}