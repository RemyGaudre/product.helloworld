function Ranking(n = 10){
	this.n=n;
	this.table[n][2];
}

Ranking.prototype.init = function(){
	for(var i= 0; i<this.n;i++){
		this.table[i][0] = 'name';
		this.table[i][1] = 'score';
	}
}

Ranking.prototupe.show = function(){
	
}