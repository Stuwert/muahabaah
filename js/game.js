//initialize game objects

var gameObjects = {
	"dog": {
		x: 5,
		y: 6
	},
	"sheep":[
		{
			x: 6,
			y: 6
		},
		{
			x: 7,
			y: 7
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
			}
		}
	}
	return board;
}

// initalize sheep


//
// function moveObj(obj, deltaX, deltaY){
// 	var positionHolder = {};
// 	positionHolder.x = obj.x;
// 	positionHolder.y = obj.y;
// 	 if (moveCheck(positionHolder, deltaX, deltaY)){
// 		 obj.x = obj.x + deltaX;
// 		 obj.y = obj.y + deltaY;
// 		if (obj.type === "dog"){
// 			board[obj.x][obj.y] = 2;
// 		}else if (obj.type === "sheep"){
// 			board[obj.x][obj.y] = 1;
// 		}
// 		board[positionHolder.x][positionHolder.y] = 0;
// 	}
// };
//
// function moveCheck (originalPosition, newX, newY){
// 	if (board[originalPosition.x + newX][originalPosition.y + newY] !== 0){
// 		return false;
// 	}else{
// 		return true;
// 	}
// }
//
// function thingCheck(obj1, index){
// 	var delta = [];
// 	delta[0] = obj1.x - this.x;
// 	delta[1] = obj1.y - this.y;
// 	console.log(delta[0]+delta[1]);
// 	if (Math.abs(delta[0]) <= 1 && Math.abs(delta[1]) <= 1 && Math.abs(delta[0]+delta[1]) <= 1){
// 		moveObj(obj1, delta[0], delta[1]);
//
// 	}
// };
