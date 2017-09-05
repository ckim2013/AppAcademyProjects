const Asteroid = require("./asteroid");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 300;
Game.DIM_Y = 300;
Game.NUM_ASTEROIDS = 5;

Game.prototype.addAsteroids = function () {
  let x;
  while (this.asteroids.length < Game.NUM_ASTEROIDS) {
    x = new Asteroid({ pos: this.randPos() });
    this.asteroids.push(x);
  }
};

Game.prototype.randPos = function () {
  let x = Math.floor(Math.random() * 300);
  let y = Math.floor(Math.random() * 300);
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach( (el) => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach( (el) => {
    el.move();
  });
};

module.exports = Game;
