//initialize game objects
var randoms = 0;
var pack = 0;
var doNothing = 0;
var gameBoard = initializeBoard();

var gameObjects = {
	"dog": [
		{ x: 12, y: 12, type: "dog", img: "black" }
	],
	"sheep":[],
	"pen":[
		{ x: 10, y: 10, type: "pen", img: "brown"}
	]
}

var score = 0;

//create board
function initializeBoard (){
	var board = [];
	for (var x=0; x<ratio; x++){
		board[x] = [];
		for (var y=0; y<ratio; y++){
			if (x === 0 || x === ratio-1 || y === 0 || y === ratio-1){
				board[x][y] = {type: "sea", img: "blue"};
			}else{
				board[x][y] = {type: "grass", img: "green"};
			}
		}
	}
	return board;
}

// populates board based on gameObjects
function populateBoard(){
	var board = initializeBoard();
	for (elements in gameObjects){
		var gamePiece = gameObjects[elements];
		for (var i=0; i<gamePiece.length; i++){
			xCord = gamePiece[i].x;
			yCord = gamePiece[i].y;
			board[xCord][yCord] = {};
			board[xCord][yCord].type = gamePiece[i].type;
			board[xCord][yCord].img = gamePiece[i].img;
		}
	}
	return board;
}
//
// //takes an object, and the delta of where the object wants to move. Determines if that movement is legitimate.
// function moveObj(obj, newX, newY){
// 	if
// 	if (typeof objectAt(obj.x, obj.y) === "number" && objectAt(obj.x+deltaX, obj.y+deltaY) === "pen"){
// 		obj.status = "penned";
// 		obj.x = null;
// 		obj.y = null;
// 		score += 1;
// 	}else if (objectAt(obj.x+deltaX, obj.y+deltaY)==="grass"){
// 		 obj.x = obj.x + deltaX;
// 		 obj.y = obj.y + deltaY;
// 	 }
// };
//
// //returns the object at X and Y coordinates.
// function objectAt (x, y){
// 	var object = gameboard[x][y];
// 	return object;
// }
//
// function isPositive(number){
// 	if (number > 0){
// 		return 1;
// 	}else if (number < 0){
// 		return -1;
// 	}else{
// 		return 0;
// 	}
// }
//
// function getRandom(min, max) {
//   return +(Math.random() * (max - min)+ min).toFixed(0);
// }
//
// function runGame(){
// 	if (areSheepAlive()){
//     gameObjects.sheep.forEach(dogCheck, gameObjects.dog);
//     gameObjects.sheep.forEach(age);
//     makeBabies();
//     render();
//   }else{
//     ctx.fillStyle = "black";
//     ctx.fillRect(0, 0, 600, 600);
//     document.getElementById('game-over').innerText = "Game Over";
//   }
// }

function init(){
	// for (var i=0; i<6; i++){
	// 	makeNewSheep(i);
	// }
	render();
}


init();
