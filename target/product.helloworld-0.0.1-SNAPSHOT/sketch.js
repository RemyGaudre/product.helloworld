

function make2DArray(cols,rows){
	var arr = new Array(cols);
	for (var i=0; i<arr.length;i++){
		arr[i] = new Array(rows);
	}
	return arr;
}

var grid;
var cols;
var rows;
var w =20;
var nbomb = 0.8;
var topBuffer;
var bottomBuffer;


function setup(){
	canva = createCanvas(screen.width/2,screen.height);
	topBuffer = createGraphics(canva.width, height/2);
    bottomBuffer = createGraphics(canva.width, height/2);
	cols = floor(width/w);
	rows = floor(height/w);
	grid = make2DArray(cols,rows);
	for (var i=0; i<cols;i++){
		for (var j=0; j<rows;j++){
			grid[i][j] = new Cell(i,j,w);
		}
	}
	//Pick nbomb spots
	nbomb = floor(nbomb*w*w);
	console.log(nbomb);
	for(var n = 0; n < nbomb;n++){
		var i = floor(random(cols));
		var j = floor(random(rows));
		if(grid[i][j].bee){
			n--;
		} else{
			grid[i][j].bee = true;
		}
	}

	for (var i=0; i<cols;i++){
		for (var j=0; j<rows;j++){
			grid[i][j].countNeighbors();
		}
	}
}

function gameOver(){
	for (var i=0; i<cols;i++){
		for (var j=0; j<rows;j++){
			grid[i][j].reveal();
		}
	}
}

function mousePressed(){
	for (var i=0; i<cols;i++){
		for (var j=0; j<rows;j++){
			if(grid[i][j].contains(mouseX,mouseY)){
				grid[i][j].reveal();
				if(grid[i][j].bee){
					gameOver();
				}
			}
		}
	}
}

function drawTopBuffer(){
	for (var i=0; i<cols;i++){
		for (var j=0; j<rows;j++){
			grid[i][j].show();
		}
	}
}

function drawBottomBuffer(){
	bottomBuffer.background(255, 255, 255);
	bottomBuffer.fill(0, 0, 0);
    bottomBuffer.textSize(32);
    bottomBuffer.text("This is the right buffer!", 50, 50);
}

function draw(){
	drawTopBuffer();
    drawBottomBuffer();
    image(topBuffer, 0, 0);
    image(bottomBuffer, 0, screen.height/2);
}