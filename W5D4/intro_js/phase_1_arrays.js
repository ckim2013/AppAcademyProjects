Array.prototype.uniq = function () {
  let result = [];

  this.forEach(function(el) {
    if (result.includes(el)) {
      return; // has to be returned not continued b/c we are in enumerable not while/for loop.
    }
    result.push(el);
  });
  return result;
};


Array.prototype.twoSum = function () {
  let result = [];

  for (let i = 0; i < this.length; i ++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function () {
  let result = [];

  for (var i = 0; i < this[0].length; i++) {
    result.push([]);
  }

  for (let x = 0; x < this.length; x ++) {
    for (let y = 0; y < this[x].length; y++) {
      result[y][x] = this[x][y];
    }
  }
  return result;
};
