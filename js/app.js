//Initializes canvas.
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var size = 600;
canvas.width = size;
canvas.height = size;
document.body.appendChild(canvas);
var gameUnit = 24;
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
      }else if (typeof board[x][y]=== "number"){
        ctx.fillStyle = "rgba(255, 255, 255, " + (1 - (board[x][y]*0.01)) + ")";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
      }else if (board [x][y] === "dog"){
        ctx.fillStyle = "black";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
      }else if (board[x][y]=== "pen"){
        ctx.fillStyle = "brown";
        ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
      }
    }
  }
  document.getElementById('score').innerText = "Your Score is: " + score;
  document.getElementById('sheep-death').innerText = countSheepDeaths() + " sheep have died.";
}


document.addEventListener('keydown', function(e){
  var newX = 0;
  var newY = 0;
  if (e.keyCode === 38){
    newY -= 2;
  }else if (e.keyCode === 40){
    newY +=2;
  }else if (e.keyCode === 37){
    newX -= 2;
  }else if (e.keyCode === 39){
    newX +=2;
  }
  if (newX + newY !== 0){
    moveObj(gameObjects.dog, newX, newY);
  }
  render();
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

});

init();
