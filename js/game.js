//initialize game objects
var randoms = 0;
var pack = 0;
var doNothing = 0;
var gameBoard = initializeBoard();
var sheepTotal = 6;
var scoreTotal = 0;
var sheepDeath;

var gameObjects = {
	"dog": [
		{ x: 12, y: 12, type: "dog", img: "black", status: "active" }
	],
	"sheep":[],
	"pen":[
		{ x: 10, y: 10, type: "pen", img: "brown", status: "active"}
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
	gameBoard = initializeBoard();
	for (elements in gameObjects){
		var gamePiece = gameObjects[elements];
		for (var i=0; i<gamePiece.length; i++){
				var gameUnit = gamePiece[i];
				if (gameUnit.status === "active"){
					gameBoard[gameUnit.x][gameUnit.y] = gamePiece[i];
				}
			}
		}
}
//
//takes an object, and the delta of where the object wants to move. Determines if that movement is legitimate.
function moveObj(obj, newX, newY){
	if (objectAt(newX, newY) === "grass"){
		obj.x = newX;
		obj.y = newY;
	}else{
		obj.x = obj.x;
		obj.y = obj.y;
	}
};

//returns the object at X and Y coordinates.
function objectAt (x, y){
	var object = gameBoard[x][y];
	return object.type;
}
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
function getRandom(min, max) {
  return +(Math.random() * (max - min)+ min).toFixed(0);
}
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
	for (var i=0; i<sheepTotal; i++){
		makeNewSheep(i);
	}
}

function main(){
	var now = Date.now();
  var delta = now - then;

	gameObjects["sheep"].forEach(moveSheep);
	gameObjects["sheep"].forEach(moveIntoPen);
	gameObjects["sheep"].forEach(wanderOff);

	render();
}

var then = Date.now();
init();
main();
