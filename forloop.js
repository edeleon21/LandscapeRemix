

function preload(){

}

function setup(){
	createCanvas(windowWidth, windowHeight)
	//i is a local variable (variables at the top are global variables and can be used anywhere in the code)
	
	background(229, 176, 245)
	for(let i = 0; i<windowWidth; i=i+10){
		line(windowWidth/2, windowHeight/2, i, windowHeight)
	}
	for(let i = 0; i<windowHeight; i=i+10){
		line(windowWidth/2, windowHeight/2, windowWidth, i)
	}
	for(let i = 0; i<windowWidth; i=i+10){
		line(windowWidth/2, windowHeight/2, i, windowWidth)
	}
	for(let i = 0; i < 100; i++){
		fill(205, 71, 245)
		ellipse(random(windowWidth), random(windowHeight), 20, 20)
		//print(i)
	}
}


function draw(){

}