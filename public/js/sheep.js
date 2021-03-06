function makeNewSheep(i){
	gameObjects.sheep[i] = {
		x: getRandom(2, ratio - 10),
		y: getRandom(2, ratio - 10),
		age: 0,
		status: "active",
		type: "sheep",
		img: "white"
	};
	// gameObjects.sheep[i].img = "rgba(255, 255, 255, " + (1 - gameObjects.sheep[i]*.01) + ")";
}


function moveSheep(sheep){
	if (isActive(sheep)){
		if (dogIsNearby(sheep)){
			moveTowardsPen(sheep);
		}else{
			moveDecision(sheep);
		}
	}
};

function sheepIsNearby(thing, distance){
	for (var i=thing.x-1; i<=thing.x+1; i++){
		for (var j=thing.y-1; i<thing.y+1; i++){
			if (gameBoard[i][j].type === 'sheep'){
				return true;
			}
		}
	}
	return false;
}

	function dogIsNearby(thing){
		var dog = gameObjects["dog"][0];
		if (Math.abs(thing.x - dog.x) <= 3 && Math.abs(thing.y - dog.y) <= 3){
			return true;
		}else;
			return false;
		}

function moveTowardsPen(thing){
	var pen = gameObjects["pen"][0];
	var xDelta = (pen.x - thing.x);
	var yDelta = (pen.y - thing.y);
	xDelta = xDelta != 0 ? xDelta/Math.abs(xDelta) : xDelta;
	yDelta = yDelta != 0 ? yDelta/Math.abs(yDelta) : yDelta;
	moveObj(thing, thing.x + xDelta, thing.y + yDelta);
}

function moveTowardsWall(thing){
	var xHolder = thing.x;
	var yHolder = thing.y;
	if (thing.x > gameUnit/2){
		xHolder++;
	}else{
		xHolder--;
	}
	if (thing.y > gameUnit/2){
		yHolder++;
	}else{
		yHolder--;
	}
	moveObj(thing, xHolder, yHolder);
}

function isNextToPen(sheep){
	var pen = gameObjects.pen[0];
	var absX = Math.abs(pen.x - sheep.x);
	var absY = Math.abs(pen.y - sheep.y);
	return (absX <= 1 && absY <= 1);
}

function moveIntoPen(sheep){
	if (isNextToPen(sheep)){
		sheep.x = null;
		sheep.y = null;
		sheep.status = "penned";
		scoreTotal++;
	}
}

function isActive(obj){
	return obj.status === "active";
}

function moveDecision(sheep){
	if (!sheepIsNearby(sheep, 4) && getRandom(1, 20) > 14){
		moveTowardsWall(sheep);
	}
}

function killSheep(sheep){
	sheep.status = "dead";
	sheep.x = null;
	sheep.y = null;
	sheepDeath++;
}

function areActive(object){
	return object.status === "active";
}

//
// function sheepCheck(obj){
// 	var xTotal = 0;
// 	var yTotal = 0;
// 	var sheepTotal = gameObjects.sheep.length;
// 	for (sheep in gameObjects.sheep){
// 		if (gameObjects.sheep[sheep].status !== "active"){
// 			sheepTotal --;
// 		}else{
// 			xTotal += gameObjects.sheep[sheep].x;
// 			yTotal += gameObjects.sheep[sheep].y;
// 		}
// 	}
// 	var xAverage = xTotal/sheepTotal;
// 	var yAverage = yTotal/sheepTotal;
// 	var xDelta = isPositive(xAverage - obj.x);
// 	var yDelta = isPositive(yAverage - obj.y);
// 	if (obj.status === "active"){
// 		moveObj(obj, xDelta, yDelta);
// 	}
// }
//
// function age (obj){
// 	obj.age +=1;
// 	if (obj.age >= 15){
// 		obj.status = "dead";
// 	}
// }
//
// function freeWill(obj){
// 	var randomizer = [1, 1, 2];
// 	if (randomizer[getRandom(0, 2)] === 1){
// 		sheepCheck(obj);
// 	}else{
// 		moveRandom(obj);
// 	}
// }
//
// function moveRandom(obj){
// 	if (obj.status === "active"){
// 		moveObj(obj, getRandom(-1,1), getRandom(-1,1) )
// 	}
// }
//
// function countSheepDeaths(){
// 	var total = 0;
// 	for (sheep in gameObjects.sheep){
// 		if (gameObjects.sheep[sheep].status === "dead"){
// 			total += 1;
// 		}
// 	}
// 	return total;
// }
//
//

function ageSheep(sheepsies){
	if(sheepsies.status != "dead"){
		sheepsies.age++;
	}
	if (sheepsies.age >= 10){
		killSheep(sheepsies);
	}
}

function areSheepAlive(sheepsies){
	return sheepsies.status === "penned" ? true : false;
}

function sheepBreeding(num){
	return getRandom(0, num/2);
}
