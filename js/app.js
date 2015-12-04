//Initializes canvas.
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var size = 600;
canvas.width = size;
canvas.height = size;
document.body.appendChild(canvas);
var gameUnit = 24;
var ratio = size/gameUnit;


//Is passed an object from board. Updates canvas.
function renderItems(renderImage, x, y){
  ctx.fillStyle = renderImage;
  ctx.fillRect(x*gameUnit, y*gameUnit, gameUnit, gameUnit);
}


//Renders the image in html based on the objects in the gameboard.
function render(){
  populateBoard();
  for (var x=0; x<gameBoard.length; x++){
    for (var y=0; y<gameBoard[x].length; y++){
      renderItems(gameBoard[x][y].img, x, y);
    }
  }
  document.getElementById('score').innerText = "Your Score is: " + scoreTotal;
  // document.getElementById('sheep-death').innerText = countSheepDeaths() + " sheep have died.";
}

document.addEventListener('keydown', function(e){
  e.preventDefault();
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
    moveObj(gameObjects.dog[0], gameObjects.dog[0].x+newX, gameObjects.dog[0].y+newY);
  }
  main();
});
