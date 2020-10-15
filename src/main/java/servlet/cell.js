function Cell(i,j,w){
	this.i = i;
	this.j = j
	this.x=i*w;
	this.y=j*w;
	this.w=w;
	this.neighborCount =0;
	this.bee = false;
	this.revealed = false;
}

Cell.prototype.show = function(){
	topBuffer.stroke(0);
	topBuffer.fill(255);
	topBuffer.rect(this.x,this.y,this.w,this.w);
	if(this.revealed){
		if(this.bee){
			topBuffer.fill(127);
			topBuffer.ellipse(this.x +this.w*0.5,this.y+this.w * 0.5,this.w*0.5);
		} else {
			topBuffer.fill(200);
			topBuffer.rect(this.x,this.y,this.w,this.w);
			if(this.neighborCount>0){
				topBuffer.textAlign(CENTER);
				topBuffer.fill(0);
				topBuffer.text(this.neighborCount,this.x + this.w *0.5,this.y + this.w -6);
			}
		}
	}
}

Cell.prototype.contains = function(x,y){
	return (x > this.x && x<this.x+this.w && y> this.y && y< this.y+this.w);
}


Cell.prototype.reveal = function(){
	this.revealed = true;
	if(this.neighborCount==0){
		for(var i=-1;i<=1;i++){
			for(var j=-1;j<=1;j++){
				if(this.i+i >= 0 && this.i+i<cols && this.j+j >= 0 && this.j+j<rows && grid[this.i+i][this.j+j].revealed == false ){
					grid[this.i+i][this.j+j].reveal();	
				}
			}
	}
	}
}

Cell.prototype.countNeighbors = function(){
	if(this.bee){
		this.neighborCount = -1;
	} else {
		var total = 0;
		for(var i=-1;i<=1;i++){
			for(var j=-1;j<=1;j++){
				if(this.i+i >= 0 && this.i+i<cols && this.j+j >= 0 && this.j+j<rows ){
					var neighbor = grid[this.i+i][this.j+j];
					if(neighbor.bee) total++;	
				}
			}
		}
		this.neighborCount = total;
	}
}