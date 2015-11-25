//initialize game objects

var gameObjects = {
	"dog": {
		x: 8,
		y: 1
	},
	"sheep":[
		{
			x: 6,
			y: 6
		},
	],
	"pen":{
		x: 3,
		y: 4
	}
}

var score = 0;

//create board


function createBoard (){
	var board = [];
	for (var x=0; x<ratio; x++){
		board[x] = [];
		for (var y=0; y<ratio; y++){
			if (x === 0 || x === ratio-1 || y === 0 || y === ratio-1){
				board[x][y] = "sea";
			}else{
				board[x][y] = "grass";
			}
		}
	}
	for (elements in gameObjects){
		var xCord = gameObjects[elements].x;
		var yCord = gameObjects[elements].y;
		if (elements !== "sheep"){
			board[xCord][yCord] = elements;
		}else{
				for (var i=0; i<gameObjects[elements].length; i++){
					if(gameObjects[elements][i].status !== "penned"){
					xCord = gameObjects[elements][i].x;
					yCord = gameObjects[elements][i].y;
					board[xCord][yCord] = elements;
				}
				}
		}
	}
	return board;
}



function moveObj(obj, deltaX, deltaY){
	if (objectAt(obj, obj.x, obj.y) === "sheep" && objectAt(obj, obj.x+deltaX, obj.y+deltaY) === "pen"){
		obj.status = "penned";
		obj.x = null;
		obj.y = null;
		score =+ 1;
	}else if (objectAt(obj, obj.x+deltaX, obj.y+deltaY)==="grass"){
		 obj.x = obj.x + deltaX;
		 obj.y = obj.y + deltaY;
	 }
	 console.log(obj);
};

function objectAt (originalPosition, x, y){
	return createBoard()[x][y];
}

function thingCheck(obj1){
	var delta = [];
	delta[0] = obj1.x - this.x;
	delta[1] = obj1.y - this.y;
	console.log(delta[0]);
	console.log(delta[1]);
	if (Math.abs(delta[0]) <= 1 && Math.abs(delta[1]) <= 1){
		moveObj(obj1, delta[0], delta[1]);
	}
};

function moveRandom(obj){
	moveObj(obj, getRandom(-1,1), getRandom(-1,1) )
}

function getRandom(min, max) {
  return +(Math.random() * (max - min)+ min).toFixed(0);
}
