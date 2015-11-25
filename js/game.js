//initalize dog
var dog = {
	type: "dog",
	x: 5,
	y: 6,
}

// initalize sheep
var sheepGroup =[
	{
		type: "sheep",
		x: 6,
		y: 6
	},
	{
		type: "sheep",
		x: 7,
		y: 7
	}
];



var board = [
		[9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 3, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 2, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 1, 0, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 1, 0, 9],
		[9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
		[9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
 ];



//0=grass 1=sheep 2=dog, 3=pen 9=sea

function moveObj(obj, deltaX, deltaY){
	var positionHolder = {};
	positionHolder.x = obj.x;
	positionHolder.y = obj.y;
	 if (moveCheck(positionHolder, deltaX, deltaY)){
		 obj.x = obj.x + deltaX;
		 obj.y = obj.y + deltaY;
		if (obj.type === "dog"){
			board[obj.x][obj.y] = 2;
		}else if (obj.type === "sheep"){
			board[obj.x][obj.y] = 1;
		}
		board[positionHolder.x][positionHolder.y] = 0;
	}
};

function moveCheck (originalPosition, newX, newY){
	if (board[originalPosition.x + newX][originalPosition.y + newY] !== 0){
		return false;
	}else{
		return true;
	}
}

function thingCheck(obj1, index){
	var delta = [];
	delta[0] = obj1.x - this.x;
	delta[1] = obj1.y - this.y;
	console.log(delta[0]+delta[1]);
	if (Math.abs(delta[0]) <= 1 && Math.abs(delta[1]) <= 1 && Math.abs(delta[0]+delta[1]) <= 1){
		moveObj(obj1, delta[0], delta[1]);

	}
};





//0=nothing 1=sheep 2=dog, 3=pen 9=sea
// var DOG = 2;
// var SHEEP = 1;
// var NULL = 0;
// var PEN = 3;
// var SEA = 9;
//
// var height = 10;
// var width = 15;
// var death = 0;
// var win = 0;
//
// board [3][6] = DOG;
// board [5][5] = PEN;
// board [2][6] = SHEEP;
// board [2][3] = SHEEP;
//
//
//
// function findDog () {
// 	for (var row=0; row<height; row++){
// 		for (var col=0; col<width; col++){
// 			if (board[row][col] == DOG){
// 				return {x:col, y:row};
// 			}
// 		}
// 	}
// }
//
// function moveItem (pos1, pos2){
//     if (pos2.y < 0 || pos2.y >=height || pos2.x <0 || pos2.x >= width){
// 			return;
//     }
//
//     if (board[pos1.y][pos1.x]==NULL){
//         return;
//     }
//     if (board[pos1.y][pos1.x] ==SHEEP){
//         if (board[pos2.y][pos2.x] == DOG || board[pos2.y][pos2.x]==SHEEP){
//             console.log ("NO!");
//             return;
//         } /*else if (board[pos2.y][pos2.x]==SHEEP){
//             sheepPush();
//
//         } */else if (board[pos2.y][pos2.x]==PEN){
//             console.log("The sheep have entered the building");
//             board [pos1.y][pos1.x] = NULL;
//             sheepGain();
//             return;
//         } else if (board[pos2.y][pos2.x]==SEA){
//             board [pos1.y][pos1.x] = NULL;
//             alert("You lost a sheep!");
//             sheepLoss();
//             return;
//         }
//     } else if (board[pos1.y][pos1.x] == DOG){
//         if (board[pos2.y][pos2.x] == SHEEP || board[pos2.y][pos2.x] == PEN || board[pos2.y][pos2.x] == SEA){
//             console.log ("NO!");
//             return;
//         }
//     } else if (board[pos1.y][pos1.x] == PEN){
//         return;
//     }
//
// 	var item = board[pos1.y][pos1.x];
// 	board [pos1.y][pos1.x] = NULL;
// 	console.log("hello"+pos2.x+pos2.y);
// 	board [pos2.y][pos2.x] = item;
// }
//
// function moveDog (x,y){
//     moveItem (findDog(), {"x":x, "y":y});
//     moveSheep();
//     sheepBabies();
//     render();
// }
//
// function sheepLoss(){
//     death += 1;
//     if (death >= 5){
//         for (var row=0; row<height; row++){
//             for (var col=0; col<width; col++){
//                 board [row][col] = NULL;
//                 alert("You LOSE!");
//             }
//         }
//     }
// }
//
// function sheepBabies(){
//     for (var row=0; row<height; row++){
// 		for (var col=0; col<width; col++){
// 			if (board[row][col] == SHEEP && board[row][col-1]==SHEEP){
//             console.log("BABIES!");
//                 if (board[row][col-2]==SEA || board[row][col-2]==DOG || board[row][col-2]==PEN){
//                     console.log("No Babies!");
//                     return;
//                 }
//                 board[row][col-2]=SHEEP;
//             }if (board[row][col]==SHEEP && board[row-1][col]==SHEEP){
//                  console.log("BABIES!");
//                 if (board[row-2][col]==SEA || board[row][col-2]==DOG || board[row][col-2]==PEN){
//                     console.log("No Babies!");
//                     return;
//                 }
//                 board[row-2][col]=SHEEP;
// 			}
// 		}
// 	}
// }
//
//
// function moveSheep(){
//
//     var doglocal = findDog();
//     var x = doglocal.x
//     var y = doglocal.y
//
//     moveItem({"x":x-1, "y":y-1},{"x":x-2, "y":y-2});
//     moveItem({"x":x, "y":y-1},{"x":x, "y":y-2});
//     moveItem({"x":x+1, "y":y-1},{"x":x+2, "y":y-2});
//     moveItem({"x":x-1, "y":y},{"x":x-2, "y":y});
//     moveItem({"x":x+1, "y":y},{"x":x+2, "y":y});
//     moveItem({"x":x-1, "y":y+1},{"x":x-2, "y":y+2});
//     moveItem({"x":x, "y":y+1},{"x":x, "y":y+2});
//     moveItem({"x":x+1, "y":y+1},{"x":x+2, "y":y+2});
//
//     /*for (var row=0; row<height; row++){
//         for (var col=0; col<width; col++){
//             if (board[row][col] == SHEEP){
//                 console.log("BAAAH");
//                 if (row<=2){
//                     if (col<=3){
//                         moveItem({"x":col, "y":row},{"x":col+1, "y":row+1});
//                     }
//                     else if (col<=9){
//                         moveItem({"x":col, "y":row},{"x":col, "y":row+1});
//                     }
//                     else if (col<=14){
//                         moveItem({"x":col, "y":row},{"x":col-1, "y":row+1});
//                     }
//                 }
//                 else if (row <=6){
//                     if (col<=3){
//                         moveItem({"x":col, "y":row},{"x":col+1, "y":row});
//                     }
//                     else if (col <=9){
//                         console.log("Nothing");
//                     }
//                     else if (col<=14){
//                         moveItem({"x":col, "y":row},{"x":col-1, "y":row});
//                     }
//                 }
//                 else if (row <=8){
//                     if (col<=3){
//                         moveItem({"x":col, "y":row},{"x":col+1, "y":row-1});
//                     }
//                     else if (col <=9){
//                         moveItem({"x":col, "y":row},{"x":col, "y":row-1});
//                     }
//                     else if (col<=14){
//                         moveItem({"x":col, "y":row},{"x":col-1, "y":row-1});
//                     }
//                 }
//             }
//         }
//     }*/
// }
//
// function makeEventHandler(x, y) {
//
//   return function() {
// 	moveDog(x,y);
//   }
//
// }
//
// function render(){
//
// 	html = "";
// 	// print table
// 	html += "<table>";
// 	for (var y=0; y<height; y++){
// 		html +="<tr>";
// 		for (var x=0; x<width; x++){
// 			html += "<td id='"+y+"_"+x+"'>";
//             if (board[y][x]==SEA){
//                 html+="<img src='sea.jpg' />"
// 			}else if 	(board[y][x] == SHEEP){
// 				html +="<img src='sheep.jpg' />";
// 			}else if (board [y][x] == DOG){
// 				html +="<img src='dog.jpg' />";
// 			}else if (board [y][x] == PEN){
//                 html +="<img src='pen.jpg' />";
//             }
// 			html+="</td>";
// 		}
// 		html+="</tr>";
// 	}
// 	html+="</table>";
//
//    sheepCount();
//
//
// 	document.getElementById("game").innerHTML = html
//
// 	for (var y=0; y<height; y++){
// 		for (var x=0; x<width; x++){
// 			var el = document.getElementById(""+y+"_"+x);
// 			el.addEventListener(
// 				'click',
// 				makeEventHandler(x,y)
// 			);
// 		}
// 	}
// }
//
// function sheepGain (){
//     win += 1;
//     console.log("win equals " + win);
//     if (win>=5){
//         for (var row=0; row<height; row++){
//             for (var col=0; col<width; col++){
//                 board [row][col] = NULL;
//             }
//         }
//         alert("You Win!");
//     }
// }
//
// function sheepCount (){
//     var sheepNum = 0;
//      for (var row=0; row<height; row++){
// 		for (var col=0; col<width; col++){
// 			if (board[row][col] == SHEEP){
//                 sheepNum += 1;
// 			}
// 		}
// 	}
//     console.log("There are" + sheepNum + "sheep");
// }
//
//
//
// function handleKeypress (event){
// 	var doglocal = findDog();
//     console.log(event.which);
//     if (event.which == 97){
//         moveDog(doglocal.x-1,doglocal.y);
//         console.log("moving left");
//     }else if (event.which == 115){
//         moveDog(doglocal.x,doglocal.y+1);
//         console.log("moving down");
//     }else if (event.which == 100){
//         moveDog(doglocal.x+1,doglocal.y);
//         console.log("moving right");
//     }else if (event.which == 119){
//         moveDog(doglocal.x,doglocal.y-1);
//         console.log("moving up");
//     }
//
// }
//
// function init(){
// 	var body = document.getElementsByTagName('body')[0] ;
// 	body.addEventListener(
// 		'keypress',
// 		handleKeypress
// 	);
// 	render();
//
// }
// init();
