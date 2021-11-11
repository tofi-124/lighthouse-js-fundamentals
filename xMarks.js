const finalPosition = function (moves = []) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      y++;
    } else if (moves[i] === "south") {
      y--;
    } else if (moves[i] === "west") {
      x--;
    } else if (moves[i] === "east") {
      x++;
    }
  }
  return [x, y];
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];

finalPosition(moves);
