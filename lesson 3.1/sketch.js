//Declráre variables
var treePos_X;
var cloudPos_X;
var cloudScale;

function setup() 
{
    createCanvas(512,512);
	
	//Initialise variables
	treePos_X = 156;
	cloudPos_X = 100;
	cloudScale = 1.0;
	   
}

function draw()
{
    background(150,150,255);
    
    //sun
    noStroke();
    fill(255,150,0);
    ellipse(430,200,100,100);
    
    //tree
    stroke(0);
    fill(180,80,0);
    ellipse(treePos_X,360,40,100);
    fill(0,150,0);
    ellipse(treePos_X,300,120,120);
    
    //cloud
    noStroke();
    fill(255);
    ellipse(cloudPos_X, //x position
			50, // y position
			50 * cloudScale,
			50 * cloudScale);
    ellipse(cloudPos_X + 30,
			50,
			30 * cloudScale,
			30 * cloudScale);
    ellipse(cloudPos_X + 50,
			50,
			20 * cloudScale,
			20 * cloudScale);
    
    //ground
    fill(200,130,0);
    rect(0,400,width,112);
    

}


