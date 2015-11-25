//Initializes canvas.
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

var renderTest = function(){
  placeDog(dog);
  for (var i=0; i<board.length; i++){
    for (var j=0; j<board[i].length; j++){
      if (board[i][j]===9){
        ctx.fillStyle = "blue";
        ctx.fillRect(i*50, j*50, 50, 50);
      }else if (board[i][j] === 0){
        ctx.fillStyle = "green";
        ctx.fillRect(i*50, j*50, 50, 50)
      }else if (board[i][j]===1){
        ctx.fillStyle = "grey";
        ctx.fillRect(i*50, j*50, 50, 50);
      }else if (board [i][j] ===2){
        ctx.fillStyle = "black";
        ctx.fillRect(i*50, j*50, 50, 50);
      }else if (board[i][j]===3){
        ctx.fillStyle = "white";
        ctx.fillRect(i*50, j*50, 50, 50);
      }
    }
  }

}

renderTest();

document.addEventListener('keydown', function(e){
  console.log("bing");
  if (e.keyCode === 38){
    dog.y -= 1;
  }else if (e.keyCode === 40){
    dog.y +=1;
  }else if (e.keyCode === 37){
    dog.x -= 1;
  }else if (e.keyCode === 39){
    dog.x +=1;
  }
  renderTest();
});

//0=grass 1=sheep 2=dog, 3=pen 9=sea

// var render = function (){
//     for (var i=0; i<board.length; i++){
//       for (var j=0; i<board[i].length; j++){
//         console.log(board[i][j]);
//
//         if (board[i][j] === 1){
//           ctx.fillStyle = "grey";
//           ctx.fillRect(i*50, j*50, 50, 50);
//         }else if (board[i][j] === 2){
//           ctx.fillStyle = "black";
//           ctx.fillRect(i*50, j*50, 50, 50);
//         }else if (board[i][j] === 3){
//           ctx.fillStyle = "white";
//           ctx.fillRect(i*50, j*50, 50, 50);
//         }else if (board[i][j] === 9){
//           ctx.fillStyle = "blue";
//           ctx.fillRect(i*50, j*50, 50, 50);
//         }else if (board[i][j] === 0){
//           ctx.fillStyle = "green";
//           ctx.fillRect(i*50, j*50, 50, 50);
//         }
//       }
//     }
// };

// init();
// alert('test')
// document.addEventListener("click", function(){
//   console.log("bing");
//   render();
// });
// addEventListener("keydown", dogPositionUpdate());
