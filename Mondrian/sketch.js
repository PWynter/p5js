function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(20);

	//draw right square
    fill('yellow');
	rect(100, 50, 600, 600);
    
    //draw left side rectangles
    fill("red");
    rect(-10, 50, 100, 250);
    rect(-10, 250, 100, 250);
    
    //draw bottom left corner
    rect(-10, 500, 100,150);
    
    //draw bottom line
    fill('blue');
    rect(-10, 650, 310,150);
    rect(450, 650, 250,100 );

}