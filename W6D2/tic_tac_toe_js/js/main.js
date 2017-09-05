const View = require("./ttt-view");
const Game = require("../tic_tac_toe_solution/game");

$( () => {
  // Your code here
  const game = new Game ();
  const $mainEl = $("figure.ttt");
  new View (game, $mainEl);
});
