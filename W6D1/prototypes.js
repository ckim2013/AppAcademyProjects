
// Function.prototype.inherits = function (superclass) {
//   function Surrogate () {}
//   Surrogate.prototype = superclass.prototype;
//   this.prototype = new Surrogate ();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function (superclass) {
  this.prototype = Object.create(superclass.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}

MovingObject.prototype.move = function () {
  console.log("I move!!");
};

function Ship (name) {
  this.name = name;
}

Ship.inherits(MovingObject);

Ship.prototype.drive = function () {
  console.log(`${this.name} is driven!`);
};


function Asteroid () {}

Asteroid.inherits(MovingObject);

Asteroid.prototype.collide = function () {
  console.log("COLLISIONNNN!");
};


let s1 = new Ship ("Boaty Mcboatface");
s1.move();
s1.drive();

let a1 = new Asteroid ();
a1.move();
a1.collide();
