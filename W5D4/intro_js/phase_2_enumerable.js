Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

// Experimental!
Array.prototype.myEachWithIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
  return this;
};

function printElIndex(el, i) {
  console.log(el);
  console.log(i);
}

function timesTwo(num) {
  return num * 2;
}


function logIfEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  }
}

// Solution 1: Function-style
Array.prototype.myMap = function (callback) {
  let result = [];
  this.myEach(function(el) {
    result.push(callback(el));
  });
  return result;
};

// Solution 2: Fat Arrow-style
Array.prototype.myMap2 = function (callback) {
  let result = [];
  this.myEach(el => result.push(callback(el)));
  return result;
};

Array.prototype.myReduce = function (callback, accum) {
  let workingArray = this;
  if (accum === undefined) {
    accum = this[0];
    workingArray = this.slice(1, this.length);
  }

  //Need to use multi-line block in order to reset accum to result of callback.
  workingArray.myEach(function(el) {
    accum = callback(accum, el);
  });
  return accum;
};
