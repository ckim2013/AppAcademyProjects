const Util = require("./utils");
const MovingObject = require("./moving_object");


function Asteroid (opt = {} ) {
  opt.color = Asteroid.COLOR;
  opt.radius = Asteroid.RADIUS;
  opt.vel = Util.randomVec(Asteroid.SPEED);
  MovingObject.call(this, opt);
}
Util.inherits(Asteroid, MovingObject);
Asteroid.COLOR = "green";
Asteroid.RADIUS = 20;
Asteroid.SPEED = 7;



module.exports = Asteroid;
