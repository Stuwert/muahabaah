

var board = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
	]
	
//0=nothing 1=sheep 2=dog
var DOG = 2;
var SHEEP = 1;
var NULL = 0;
var PEN = 3;

board [4][3] = SHEEP;
board [3][6] = DOG;
board [5][5] = PEN;
board [2][6] = SHEEP;
board [1][3] = SHEEP;


function findDog () {
	for (var row=0; row<10; row++){
		for (var col=0; col<10; col++){
			if (board[row][col] == DOG){
				return {x:col, y:row};
			}
		}
	}
}

function moveItem (pos1, pos2){
    if (pos2.y < 0 || pos2.y >=10 || pos2.x <0 || pos2.x >= 10){
			return;
    }
    
    if (board[pos1.y][pos1.x]==NULL){
        return;
    }    
    else if (board[pos1.y][pos1.x] ==SHEEP){
       if (board[pos2.y][pos2.x] == SHEEP || board[pos2.y][pos2.x] == DOG){
            console.log ("NO!");
            return;
        }
        if (board[pos2.y][pos2.x]==PEN){
            console.log("The sheep have entered the building");
            board [pos1.y][pos1.x] = NULL;
            return;
        }
    } else if (board[pos1.y][pos1.x] == DOG){
        if (board[pos2.y][pos2.x] == SHEEP || board[pos2.y][pos2.x] == PEN){
            console.log ("NO!");
            return;
        }
    } else if (board[pos1.y][pos1.x] == PEN){
        return;
    }
	
	var item = board[pos1.y][pos1.x];
	board [pos1.y][pos1.x] = NULL;
	console.log("hello"+pos2.x+pos2.y);
	board [pos2.y][pos2.x] = item;
}

function moveDog (x,y){
    moveItem (findDog(), {"x":x, "y":y});
    moveSheep();
    render();
}

function moveSheep(){
    var doglocal = findDog();
    var x = doglocal.x
    var y = doglocal.y
    moveItem({"x":x-1, "y":y-1},{"x":x-2, "y":y-2});
    moveItem({"x":x, "y":y-1},{"x":x, "y":y-2});
    moveItem({"x":x+1, "y":y-1},{"x":x+2, "y":y-2});
    moveItem({"x":x-1, "y":y},{"x":x-2, "y":y});
    moveItem({"x":x+1, "y":y},{"x":x+2, "y":y});
    moveItem({"x":x-1, "y":y+1},{"x":x-2, "y":y+2});
    moveItem({"x":x, "y":y+1},{"x":x, "y":y+2});
    moveItem({"x":x+1, "y":y+1},{"x":x+2, "y":y+2});    
}          
	
function makeEventHandler(x, y) {

  return function() {
	moveDog(x,y);
  }
  
}

function render(){

	html = "";
	// print table
	html += "<table>";
	for (var y=0; y<10; y++){
		html +="<tr>";
		for (var x=0; x<10; x++){
			html += "<td id='"+y+"_"+x+"'>";
			if 	(board[y][x] == SHEEP){
				html +="<img src='sheep.jpg' />";
			}else if (board [y][x] == DOG){
				html +="<img src='dog.jpg' />";
			}else if (board [y][x] == PEN){
                html +="<img src='pen.jpg' />";
            }
			html+="</td>";
		}
		html+="</tr>";
	}
	html+="</table>";
    
    var sheepCount = 0;
    for (var row=0; row<10; row++){
		for (var col=0; col<10; col++){
			if (board[row][col] == SHEEP){
                sheepCount += 1;
			}
		}
	}
    console.log(sheepCount);
    if (sheepCount == 0){
        alert("YOU WIN!");
    }
    
    
	
	document.getElementById("game").innerHTML = html
	
	for (var y=0; y<10; y++){
		for (var x=0; x<10; x++){
			var el = document.getElementById(""+y+"_"+x);
			el.addEventListener(
				'click',
				makeEventHandler(x,y)
			);
		}
	}
}

function handleKeypress (event){
	var doglocal = findDog();
    console.log(event.which);
    if (event.which == 97){
        moveDog(doglocal.x-1,doglocal.y);
        console.log("moving left");
    }else if (event.which == 115){
        moveDog(doglocal.x,doglocal.y+1);
        console.log("moving down");
    }else if (event.which == 100){
        moveDog(doglocal.x+1,doglocal.y);
        console.log("moving right");
    }else if (event.which == 119){
        moveDog(doglocal.x,doglocal.y-1);
        console.log("moving up");
    }
    
}

function init(){
	var body = document.getElementsByTagName('body')[0] ;
	body.addEventListener(
		'keypress',
		handleKeypress
	);
	render();

}
init();