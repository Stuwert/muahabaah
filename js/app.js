for (i=0; i<board.length; i++){
  var newRowDiv = document.createElement("div")
  newRowDiv.setAttribute('class','Row-Div');
  document.getElementById('game').appendChild(newRowDiv);
  for (j=0; j<board[i].length; j++){
    var newDiv = document.createElement("div");
    document.getElementsByClassName('Row-Div')[i].appendChild(newDiv);
  }
}
