const Game = require("./game");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  setInterval( this.game.draw.bind(this.game, this.ctx), 20);
  setInterval( this.game.moveObjects.bind(this.game), 20);
};

module.exports = GameView;
