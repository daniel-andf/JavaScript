function setup() {

		createCanvas(1000,1000);
		background(200);

}

function draw() {

	// begin male robot
	fill(0,255,0)
	
	//head
	beginShape();
	vertex(320,50);
	vertex(220,50);
	vertex(220,150);
	vertex(320,150);
	endShape(CLOSE);

	//right eye
	
	fill(255,255,255)
	beginShape();
	vertex(286,72);
	vertex(286,92);
	vertex(306,92);
	vertex(306,72);
	endShape(CLOSE);

	//left eye
	
	beginShape();
	vertex(246,72);
	vertex(246,92);
	vertex(266,92);
	vertex(266,72);
	endShape(CLOSE);

	//mouth
	
	beginShape();
	vertex(246,120);
	vertex(306,120);
	vertex(306,140);
	vertex(246,140);
	endShape(CLOSE);

	beginShape();
	vertex(265,120);
	vertex(265,140);
	endShape(CLOSE);
	beginShape();
	vertex(285,120);
	vertex(285,140);
	endShape(CLOSE);

	fill(55, 140, 158)
	//body
	beginShape();
	vertex(370,370);
	vertex(370,150);
	vertex(170,150);
	vertex(170,370);
	endShape(CLOSE);

	fill(0,255,0)
	//right leg
	beginShape();
	vertex(330,370);
	vertex(330,500);
	vertex(300,500);
	vertex(300,370);
	endShape(CLOSE);

	//left leg
	beginShape();
	vertex(250,370);
	vertex(250,500);
	vertex(220,500);
	vertex(220,370);
	endShape(CLOSE);


    //left arm
	beginShape();
	vertex(170,170);
	vertex(170,210);
	vertex(80,230);
	vertex(40,210);
	endShape(CLOSE);

	//right arm
	beginShape();
	vertex(370,170);
	vertex(370,210);
	vertex(460,230);
	vertex(500,210);
	endShape(CLOSE);

	//end male robot
 	
 	//begin female robot

 	//hair
 	fill(252, 244, 2);

 	arc(760, 100, 150, 150, PI, TWO_PI,CHORD);

 	//head
 	fill(252, 196, 243);
 	
 	ellipse(762,102,100);

  	//eyes and mouth
 	fill(255,255,255);
 	ellipse(736,88,20);
 	ellipse(770,88,20);
 	ellipse(754,120,60,20);

	
 	//body
 	fill(206, 43, 179);
	beginShape();
	vertex(698,152);
	vertex(828,152);
	vertex(878,368);
	vertex(658,368);	
	endShape(CLOSE);

	//legs and arms
  	fill(252, 196, 243);

  	rect(708,368,30,130);
  	rect(804,368,30,130);
  	line(687,210,602,262);
  	line(842,210,927,262);


  	//end female robot
}