//initialize game objects
var randoms = 0;
var pack = 0;
var doNothing = 0;

var gameObjects = {
	"dog": {
		x: 12,
		y: 12
	},
	"sheep":[],
	"pen":{
		x: 10,
		y: 10
	},
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
	return board;
}

function populateBoard(){
	var board = [];
	for (elements in gameObjects){
		var xCord = gameObjects[elements].x;
		var yCord = gameObjects[elements].y;
		if (elements !== "sheep"){
			board[xCord][yCord] = elements;
		}else{
				for (var i=0; i<gameObjects[elements].length; i++){
					if(gameObjects[elements][i].status === "active"){
						xCord = gameObjects[elements][i].x;
						yCord = gameObjects[elements][i].y;
						board[xCord][yCord] = gameObjects[elements][i].age;
					}
				}
		}
	}
	return board;
}

function moveObj(obj, deltaX, deltaY){
	if (typeof objectAt(obj.x, obj.y) === "number" && objectAt(obj.x+deltaX, obj.y+deltaY) === "pen"){
		obj.status = "penned";
		obj.x = null;
		obj.y = null;
		score += 1;
	}else if (objectAt(obj.x+deltaX, obj.y+deltaY)==="grass"){
		 obj.x = obj.x + deltaX;
		 obj.y = obj.y + deltaY;
	 }
};

function objectAt (x, y){
	if (x < 0 || y < 0){
		return null;
	}else{
		return createBoard()[x][y];
	}
}

function isPositive(number){
	if (number > 0){
		return 1;
	}else if (number < 0){
		return -1;
	}else{
		return 0;
	}
}

function getRandom(min, max) {
  return +(Math.random() * (max - min)+ min).toFixed(0);
}

function runGame(){
	if (areSheepAlive()){
    gameObjects.sheep.forEach(dogCheck, gameObjects.dog);
    gameObjects.sheep.forEach(age);
    makeBabies();
    render();
  }else{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 600, 600);
    document.getElementById('game-over').innerText = "Game Over";
  }
}

function init(){
	for (var i=0; i<6; i++){
		makeNewSheep(i);
	}
	render();
}
