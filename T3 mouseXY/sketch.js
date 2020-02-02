function setup()
{
	createCanvas(800, 600);
    fill(255, 255, 255);
    background(0, 0, 0);
}

function draw()
{
	
	ellipse(mouseX, mouseY, 50, 50);
    
}

function mousePressed()
{
    fill(255,0,0);
}

function keyPressed()
{
    fill(255,255,0);
}