function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
}

function draw()
{
	strokeWeight(2);

	//robot body 1 - delete this code and make your own robot body
	fill(200);
	rect(90, 200, 120, 130);
	strokeWeight(10);
    rect(70, 200, 30, 100);
	rect(200, 200, 30, 100);
	strokeWeight(2);
    rect(120, 330, 10, 110);
	rect(150, 330, 30, 110);

	//robot body 2 - delete this code and make your own robot body
    fill(200);
	rect(450, 200, 120, 130);
	rect((370, 200, 30, 100));
	rect(500, 200, 30, 100);
	rect(500, 330, 30, 110);
	rect(450, 330, 30, 110);


	//robot body 3 - delete this code and make your own robot body
    fill(200);
	rect(690, 200, 120, 130);
	fill(400);
    rect(670, 200, 30, 100);
    fill(200)
	rect(800, 200, 30, 100);
	rect(750, 330, 30, 110);


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
	fill(200);
	ellipse(150, 150, 100, 100, 50);
    //robot head 2
	fill(200);
    rect(400, 100, 100, 100, 10);
    //robot head 3
	rect(700, 100, 100, 100, 10);

	//ears
	fill(255, 0, 0);

	//robot ears 1
	rect(93, 130, 10, 33);
	rect(197, 130, 10, 33);

	//robot ears 2
    fill(200);
	rect(393, 130, 10, 33);
	rect(497, 130, 10, 33);

	//robot ears 3
	rect(693, 130, 10, 33);
	rect(797, 130, 10, 33);



	//robots' antennas
	fill(250, 250, 0);
    // robot antenna 1
	ellipse(150, 93, 10, 10);
    // robot antenna 1
	ellipse(450, 93, 10, 10);
    // robot antenna 1
	ellipse(750, 93, 10, 10);

    //robots' antennas
	fill(100, 149, 237);
    // robot antenna 1
	rect(140, 97, 20, 10);
    // robot antenna 2
	rect(440, 97, 20, 10);
    // robot antenna 3
	rect(740, 97, 20, 10);


	//robot 1's eyes
	fill(199, 21, 133);
	ellipse(125, 130, 26, 26);
    fill(255);
	point(125, 130);
	ellipse(175, 130, 26, 26);
	point(175, 130);

	//robot 2's eyes
	ellipse(425, 130, 26, 26);
	point(425, 130);
    fill(199, 21, 133);
	ellipse(475, 130, 26, 26);
    fill(255);
	point(475, 130);

	//robot 3's eyes
  
	fill(0, 255, 127);
    ellipse(725, 130, 26, 26);
	point(725, 130);
	ellipse(775, 130, 26, 26);
    fill(255);
	point(775, 130);
    


	//robots' noses
	fill(255, 0, 0);
    //robot 1 nose
	triangle(150, 135, 135, 160, 165, 160);
    //robot 2 nose
	triangle(450, 135, 435, 160, 465, 160);
    //robot 3 nose
	triangle(750, 135, 735, 160, 765, 160);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(128, 175);
	vertex(136, 185);
	vertex(142, 175);
	vertex(150, 185);
	vertex(158, 175);
	vertex(166, 185);
	vertex(174, 175);
	endShape();

	//robot 2 mouth
	beginShape();
	vertex(428, 175);
	vertex(436, 185);
	vertex(442, 175);
	vertex(450, 185);
	vertex(458, 175);
	vertex(466, 185);
	vertex(474, 175);
	endShape();

	//robot 3 mouth
	beginShape();
	vertex(728, 175);
	vertex(736, 185);
	vertex(742, 175);
	vertex(750, 185);
	vertex(758, 175);
	vertex(766, 185);
	vertex(774, 175);
	endShape();
}