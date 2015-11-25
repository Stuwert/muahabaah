//Initializes canvas.
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

var render = function(){
  var board = createBoard();
  for (var x=0; x<board.length; x++){
    for (var y=0; y<board[x].length; y++){
      if (board[x][y] === "sea"){
        ctx.fillStyle = "blue";
        ctx.fillRect(x*50, y*50, 50, 50);
      }else if (board[x][y] === 0){
        ctx.fillStyle = "green";
        ctx.fillRect(x*50, y*50, 50, 50)
      }else if (board[x][y]===1){
        ctx.fillStyle = "#8AC4FF";
        ctx.fillRect(x*50, y*50, 50, 50);
      }else if (board [x][y] ===2){
        ctx.fillStyle = "black";
        ctx.fillRect(x*50, y*50, 50, 50);
      }else if (board[x][y]===3){
        ctx.fillStyle = "white";
        ctx.fillRect(x*50, y*50, 50, 50);
      }
    }
  }

}

render();

// document.addEventListener('keydown', function(e){
//   var newX = 0;
//   var newY = 0;
//   if (e.keyCode === 38){
//     newY -= 1;
//   }else if (e.keyCode === 40){
//     newY +=1;
//   }else if (e.keyCode === 37){
//     newX -= 1;
//   }else if (e.keyCode === 39){
//     newX +=1;
//   }
//   if (newX + newY !== 0){
//     moveObj(dog, newX, newY);
//   }
//   sheepGroup.forEach(thingCheck, dog);
//   renderTest();
// });
