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
		}
	],
	"pen":{
		x: 3,
		y: 4
	}
}

//create board


function createBoard (){
	var board = [];
	for (var x=0; x<=10; x++){
		board[x] = [];
		for (var y=0; y<=10; y++){
			if (x === 0 || x === 9 || y === 0 || y === 9){
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
					xCord = gameObjects[elements][i].x;
					yCord = gameObjects[elements][i].y;
					board[xCord][yCord] = elements;
				}
		}
	}
	return board;
}



function moveObj(obj, deltaX, deltaY){
	 if (moveCheck(obj, obj.x+deltaX, obj.y+deltaY)){
		 obj.x = obj.x + deltaX;
		 obj.y = obj.y + deltaY;
	 }
};

function moveCheck (originalPosition, newX, newY){
	var placeCheck = createBoard();
	if (placeCheck[newX][newY] === "grass"){
		return true;
	}else{
		return false;
	}
}

function thingCheck(obj1, index){
	var delta = [];
	delta[0] = obj1.x - this.x;
	delta[1] = obj1.y - this.y;
	console.log(delta[0]);
	console.log(delta[1]);
	if (Math.abs(delta[0]) <= 1 && Math.abs(delta[1]) <= 1){
		moveObj(obj1, delta[0], delta[1]);
	}
};
