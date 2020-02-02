function setup() {
  createCanvas(800,800);
  background(224, 255, 255);
  strokeWeight(10);
  line(20,20,20,700);
}

function draw()
{
    //circles
    stroke('black');
    fill('red');
    strokeWeight(20);
    ellipse(400, 400, 500, 500);
    strokeWeight(2);
    
   
    strokeWeight(5);
    fill(190, 211, 229, 100);
    ellipse(500, 400, 100, 100);
    strokeWeight(2);
    
    strokeWeight(6);
    fill(255, 236, 139,100);
    ellipse(300, 600, 100, 100);
    strokeWeight(2);
	
    // triangles
    stroke('yellow');
    strokeWeight(2)
    fill('orange');
    triangle(300, 200, 400, 200, 483, 475);
    strokeWeight(2);
    
    strokeWeight(2)
    fill('blue');
    triangle(250, 350, 220, 500, 350, 500);
    strokeWeight(2);
    noStroke();
    
    
    // lines
    stroke('black');
    line(200,275,400,400);
    line(300,175,440,300);
    line(300,175,440,500);
    line(400,175,440,600);
    line(600,175,600,600);
    line(200,600,600,650);
    
}


//triangles ,ellipses,lines,points