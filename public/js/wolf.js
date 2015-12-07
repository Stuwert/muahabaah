function initializeWolf(){
  var wolves = gameObjects["wolf"];
  var length = gameObjects["wolf"].length;
  var numberOfNewWolves = getRandom(0,2);
  wolves[length] = {
    x: 1,
    y: 1,
    type: "wolf",
    status: "active",
    img: "grey"
  }
}
