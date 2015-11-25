//Initializes canvas.
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var size = 400;
canvas.width = size;
canvas.height = size;
document.body.appendChild(canvas);
var gameUnit = 8;
var ratio = size/gameUnit;


var render = function(){
  var board = createBoard();
  for (var x=0; x<board.length; x++){
    for (var y=0; y<board[x].length; y++){
      if (board[x][y] === "sea"){
        ctx.fillStyle = "blue";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
      }else if (board[x][y] === "grass"){
        ctx.fillStyle = "green";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit)
      }else if (board[x][y]=== "sheep"){
        ctx.fillStyle = "#8AC4FF";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
      }else if (board [x][y] === "dog"){
        ctx.fillStyle = "black";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
      }else if (board[x][y]=== "pen"){
        ctx.fillStyle = "white";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
      }
    }
  }
  document.getElementsByTagName('p')[0].innerText = "Your Score is: " + score;
}


document.addEventListener('keydown', function(e){
  var newX = 0;
  var newY = 0;
  if (e.keyCode === 38){
    newY -= 1;
  }else if (e.keyCode === 40){
    newY +=1;
  }else if (e.keyCode === 37){
    newX -= 1;
  }else if (e.keyCode === 39){
    newX +=1;
  }
  if (newX + newY !== 0){
    moveObj(gameObjects.dog, newX, newY);
  }
  render();
  gameObjects.sheep.forEach(thingCheck, gameObjects.dog);
  render();
  gameObjects.sheep.forEach(moveRandom);
});


render();
