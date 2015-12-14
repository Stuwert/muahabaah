document.addEventListener('keydown', moveScreen);

function moveScreen(e){
  var newX = 0, newY = 0;
  switch (e.keyCode) {
    case 38:
      newY --;
      break;
    case 40:
      newY++;
      break;
    case 37:
      newX--;
      break;
    case 39:
      newX++;
    default:
    break;
  }
  if (newX + newY !== 0){
    moveObj(gameObjects.dog[0], gameObjects.dog[0].x+newX, gameObjects.dog[0].y+newY);
    moveObj(gameObjects.dog[0], gameObjects.dog[0].x+newX, gameObjects.dog[0].y+newY);
  }
  main();
}
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
  document.getElementById('sheep-death').innerText = sheepDeath + " sheep have died so far";
  // document.getElementById('sheep-death').innerText = countSheepDeaths() + " sheep have died.";
}
