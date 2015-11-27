
function makeBabies (){
	var currentSheep = gameObjects.sheep;
	var breedingAgeSheepNumber = currentSheep.filter(ageValue).length;
	if (breedingAgeSheepNumber % 2 !== 0){
		breedingAgeSheepNumber--;
	}
	newSheep = gestation(breedingAgeSheepNumber/2);
	var currentSheepNumber = currentSheep.length;
	for (var i = currentSheepNumber; i < currentSheepNumber + newSheep; i++){
		makeNewSheep(i);
	}
}

function ageValue(e){
	if (e.age > 4 && e.age < 11){
		return true;
	}else{
		return false;
	}
}

function gestation(number){
	var babies = 0;
	for (var i=0; i<number; i++){
		var randomizer = getRandom(0,3);
		if (randomizer === 1){
			babies += 1;
		}
	}
	return babies;
}


function dogCheck(obj1){
	if (obj1.status === "active"){
		var pen = gameObjects.pen;
		var dogDeltaX = this.x - obj1.x;
		var dogDeltaY = this.y - obj1.y;
		var penDeltaX = pen.x - obj1.x;
		var penDeltaY = pen.y - obj1.y;
		if (Math.abs(penDeltaX) <= 1 && Math.abs(penDeltaY) <= 1){
			moveObj(obj1, penDeltaX, penDeltaY);
		}else {
			if (dogDeltaX/penDeltaX < 0 && dogDeltaY/penDeltaY < 0){
				moveObj(obj1, isPositive(penDeltaX), isPositive(penDeltaX));
			}else if(dogDeltaX/penDeltaX < 0){
				moveObj(obj1, isPositive(penDeltaX), 0);
			}else if(dogDeltaY/penDeltaY < 0){
				moveObj(obj1, 0, isPositive(penDeltaY));
			}else{
				freeWill(obj1);
			}
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

function freeWill(obj){
	var randomizer = [1, 1, 2];
	if (randomizer[getRandom(0, 2)] === 1){
		sheepCheck(obj);
	}else{
		moveRandom(obj);
	}
}

function moveRandom(obj){
	if (obj.status === "active"){
		moveObj(obj, getRandom(-1,1), getRandom(-1,1) )
	}
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
	if (livingSheep > 0){
		return true;
	}else{
		return false;
	}
}
