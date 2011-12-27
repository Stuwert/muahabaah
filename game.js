

board = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]
	
//0=nothing 1=sheep 2=dog
var DOG = 2;
var SHEEP = 1;
var NULL = 0;

board [4][3] = SHEEP;
board [3][6] = DOG;
board [2][3] = SHEEP;
board [3][4] = SHEEP;
board [2][1] = SHEEP;
board [3][7] = SHEEP;
board [4][4] = SHEEP;
board [2][6] = SHEEP;
board [7][3] = SHEEP;


function findDog () {
	for (var row=0; row<9; row++){
		for (var col=0; col<9; col++){
			if (board[row][col] == DOG){
				return {x:col, y:row};
			}
		}
	}
}

function moveItem (pos1, pos2){
	if (pos2.y < 0 || pos2.y >=9 || pos2.x <0 || pos2.x >= 9){
			return;
	}
	if (board[pos2.y][pos2.x] == SHEEP || board[pos2.y][pos2.x] == DOG){
		console.log ("NO!");
		return;
	}
	var item = board[pos1.y][pos1.x];
	board [pos1.y][pos1.x] = NULL;
	console.log("hello"+pos2.x+pos2.y);
	board [pos2.y][pos2.x] = item;
}
	
	
function makeEventHandler(x, y) {

  return function() {
	moveItem (findDog(), {"x":x, "y":y});
	
	moveItem ({"x":x-1, "y":y-1}, {"x":x-2, "y":y-2});
	moveItem ({"x": x, "y": y-1}, {"x": x, "y":y-2});
	moveItem ({"x": x+1, "y": y-1}, {"x": x+2, "y":y-2});

	moveItem ({"x": x-1, "y": y}, {"x": x-2, "y":y});
	moveItem ({"x": x+1, "y": y}, {"x": x+2, "y":y});

	moveItem ({"x": x-1, "y": y+1}, {"x": x-2, "y":y+2});
	moveItem ({"x": x, "y": y+1}, {"x": x, "y":y+2});
	moveItem ({"x": x+1, "y": y+1}, {"x": x+2, "y":y+2});
	render();
  }
}

function render(){

	html = "";
	// print table
	html += "<table>";
	for (var y=0; y<9; y++){
		html +="<tr>";
		for (var x=0; x<9; x++){
			html += "<td id='"+y+"_"+x+"'>";
			if 	(board[y][x] == SHEEP){
				html +="<img src='sheep.jpg' />";
			}else if (board [y][x] == DOG){
				html +="<img src='dog.jpg' />";
			}
			html+="</td>";
		}
		html+="</tr>";
	}
	html+="</table>";
	
	document.getElementById("game").innerHTML = html
	
	for (var y=0; y<9; y++){
		for (var x=0; x<9; x++){
			var el = document.getElementById(""+y+"_"+x);
			el.addEventListener(
				'click',
				makeEventHandler(x,y)
			);
		}
	}
}

function handleKeypress (event){
	console.log(event.which);
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