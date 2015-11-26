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
	if (objectAt(obj.x, obj.y) === "sheep" && objectAt(obj.x+deltaX, obj.y+deltaY) === "pen"){
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

function makeBabies (){
	var newSheep = 0;
	var sheepObject = gameObjects.sheep;
	for (var i=0; i<sheepObject.length; i++){
		var currentSheep = sheepObject[i];
		var curX = currentSheep.x;
		var curY = currentSheep.y;
		if (currentSheep.age > 4 && currentSheep.age < 11 ){
			for (var j=0; j<sheepObject.length; j++){
				var otherX = sheepObject[j].x;
				var otherY = sheepObject[j].y;
				if (curY === otherY){
					switch(curX){
						case otherX -1:
							newSheep++;
							break;
						case otherX +1:
							newSheep++;
							break;
						default:
							newSheep +=0;
					}
				}
				if (curX === otherX){
					switch(curY){
						case otherY-1:
							newSheep++;
							break;
						case otherY +1:
							newSheep++;
							break;
						default:
							newSheep += 0;
					}
				}
			}
		}
	}
	newSheep = gestation(newSheep);
	var sheepCount = sheepObject.length;
	for (var i = sheepCount; i < sheepCount + newSheep; i++){
		makeNewSheep(i);
	}
}

function gestation(number){
	var babies = 0;
	for (var i=0; i<number; i++){
		var randomizer = getRandom(0,2);
		if (randomizer === 1){
			babies += 1;
		}
	}
	return babies;
}

function dogCheck(obj1){
	if (obj1.status === "active"){
		var xDelta = obj1.x - this.x;
		var yDelta = obj1.y - this.y;
		if (Math.abs(xDelta) <= 3 && Math.abs(yDelta) <= 3){
			moveObj(obj1, isPositive(xDelta), isPositive(yDelta));
		}
	}
};

function sheepCheck(obj){
	var xTotal = 0;
	var yTotal = 0;
	var sheepTotal = gameObjects.sheep.length;
	for (sheep in gameObjects.sheep){
		if (gameObjects.sheep[sheep].status !== "active"){
			sheepTotal --;
		}else{
			xTotal += gameObjects.sheep[sheep].x;
			yTotal += gameObjects.sheep[sheep].y;
		}
	}
	var xAverage = xTotal/sheepTotal;
	var yAverage = yTotal/sheepTotal;
	var xDelta = isPositive(xAverage - obj.x);
	var yDelta = isPositive(yAverage - obj.y);
	if (obj.status === "active"){
		moveObj(obj, xDelta, yDelta);
	}
}

function age (obj){
	obj.age +=1;
	if (obj.age >= 15){
		obj.status = "dead";
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

function freeWill(obj){
	var randomizer = [0, 0, 0, 0, 0, 1, 1, 2];
	if (randomizer[getRandom(0, 7)] === 1){
		pack++;
		sheepCheck(obj);
	}else if (randomizer[getRandom(0, 13)] === 2){
		randoms++;
		moveRandom(obj);
	}else{
		doNothing++;
	}
}

function moveRandom(obj){
	if (obj.status === "active"){
		moveObj(obj, getRandom(-1,1), getRandom(-1,1) )
	}
}

function getRandom(min, max) {
  return +(Math.random() * (max - min)+ min).toFixed(0);
}

function countSheepDeaths(){
	var total = 0;
	for (sheep in gameObjects.sheep){
		if (gameObjects.sheep[sheep].status === "dead"){
			total += 1;
		}
	}
	return total;
}

function makeNewSheep(i){
	gameObjects.sheep[i] = {};
	gameObjects.sheep[i].x = getRandom(2, 17);
	gameObjects.sheep[i].y = getRandom(2, 17);
	gameObjects.sheep[i].age = 0;
	gameObjects.sheep[i].status = "active";
}

function areSheepAlive(){
	var sheeps = gameObjects.sheep;
	var livingSheep = 0;
	for (var i=0; i<sheeps.length; i++){
		if (sheeps[i].status !== "penned" && sheeps[i].status !== "dead"){
			livingSheep++;
		}
	}
	console.log(livingSheep);
	if (livingSheep > 0){
		return true;
	}else{
		return false;
	}
}

function init(){
	for (var i=0; i<6; i++){
		makeNewSheep(i);
	}
	render();
}
