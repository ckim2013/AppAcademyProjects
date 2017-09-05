function MovingObject (options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

// document.addEventListener("DOMContentLoaded", function() {
// const canvasEl = document.getElementById("canvas");
// canvasEl.width = 300;
// canvasEl.height = 300;

// const ctx = canvasEl.getContext("2d");
//
// const m = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
//
// m.draw(ctx);
// });


module.exports = MovingObject;
