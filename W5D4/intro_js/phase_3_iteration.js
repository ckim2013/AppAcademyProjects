// If you use fat arrow, this persists.
Array.prototype.bubbleSort1 = function() {
  let flag = true;
  while (flag) {
    flag = false;
    this.myEachWithIndex((el, i) => {
      if (i + 1 === this.length) {
        return;
      }
      else if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        flag = true;
      }
    });
  }
  return this;
};

// We had to create 'result' because we are using function style instead of
// fat arrow so 'this' will not persist in our eachwithindex block
Array.prototype.bubbleSort2 = function() {
  let flag = true;
  let that = this;
  while (flag) {
    flag = false;
    that.myEachWithIndex(function(el, i) {
      if (i + 1 === that.length) {
        return;
      }
      else if (that[i] > that[i + 1]) {
        let temp = that[i];
        that[i] = that[i + 1];
        that[i + 1] = temp;
        flag = true;
      }
    });
  }
  return that;
};

String.prototype.substrings = function () {

  let substring = '';
  let results = [];
  let i = 0;
  let j = 0;
  while(i <= this.length) {
    j = i + 1;
    while(j <= this.length) {
      substring = this.split('').slice(i, j);
      results.push(substring.join(''));
      j ++;
    }
    i ++;
  }
  return results;
};
