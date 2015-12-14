//initialize game objects
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var size = 450;
canvas.width = size;
canvas.height = size;
document.body.appendChild(canvas);
var gameUnit = 15;
var ratio = size/gameUnit;
var randoms = 0;
var pack = 0;
var doNothing = 0;
var gameBoard = initializeBoard();
var sheepTotal = 6;
var scoreTotal = 0;
var sheepDeath = 0;
var gameStatus = "new";
var score = 0;
var activeSheep;

// potential statuses "new" "inprogress" "reset" "over"
// statuses can be "active", "penned", "inactive"

var gameObjects = {
	"dog": [
		{ x: 12, y: 12, type: "dog", img: "black", status: "active" }
	],
	"sheep":[],
	"pen":[
		{ x: 10, y: 10, type: "pen", img: "brown", status: "active"}
	],
	"wolf":[]
}



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
	// initializeWolf();
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
	if (gameBoard[newX][newY].type === "grass"){
		obj.x = newX;
		obj.y = newY;
		gameBoard[newX][newY] = obj;
	}else if(obj.type === "sheep" && gameBoard[newX][newY].type === "sea"){
			killSheep(obj);
	}else{
		obj.x = obj.x;
		obj.y = obj.y;
	}
};

function getRandom(min, max) {
  return +(Math.random() * (max - min)+ min).toFixed(0);
}

function initSheep(){
	for (var i=0; i<sheepTotal; i++){
		makeNewSheep(i);
	}
}

function initDog(){
	gameObjects["dog"] = {
		x: 12,
		y: 12,
		type: "dog",
		img: "black",
		status: "active"
	}
}

function initPen(){
}

function main(){
	gameObjects["sheep"].forEach(moveSheep);
	gameObjects["sheep"].forEach(moveIntoPen);
	render();
	endCheck();
}

$('#generate').click(function(){
	sheepTotal = $('input').val();
	initSheep();
	main();
})

function endCheck(){
	if (gameStatus != "new") {
		if(gameObjects["sheep"].filter(areActive).length === 0){
			if(gameObjects["sheep"].filter(areSheepAlive).length === 0){
				gameStatus = "over";
			}else{
				gameStatus = "reset";
				gameObjects["sheep"].forEach(ageSheep);
				gameObjects["sheep"].forEach(function(item){
					console.log(item.age);
				})
				gameReset();
			}
		}
	}
	gameStatus = "inprogress";
}

function gameReset(){
	sheepTotal = gameObjects["sheep"].filter(areSheepAlive).length;
	gameBoard["sheep"] = {};
	sheepBreeding(sheepTotal);
	initSheep();
	render();

}
