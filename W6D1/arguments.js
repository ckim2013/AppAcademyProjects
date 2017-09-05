function sumArguments(){
  let sumSoFar = 0;
  for (var i = 0; i < arguments.length; i++) {
    sumSoFar += arguments[i];
  }
  return sumSoFar;
}

function sumRest(...numbers) {
  let sumSoFar = 0;
  numbers.forEach( (el) => {
    sumSoFar += el;
  });
  return sumSoFar;
}

// Version One using arguments
Function.prototype.myBind = function () {
  let outerArgArray = Array.from(arguments);
  outerArgArray.unshift(this);
  return function () {
    let innerArgArray = Array.from(arguments);
    let originalFunc = outerArgArray.shift();
    return originalFunc.apply(outerArgArray[0], outerArgArray.slice(1).concat(innerArgArray));
  };
};

// Version Two using spread
// Function.prototype.myBind = function (thisArg, ...args) {
//   return (...callargs) => {
//     return this.apply(thisArg, args.concat(callargs));
//   };
// };

Array.prototype.arrSum = function () {
  let acc = 0;
  this.forEach ( (sum) => {
    acc += sum;
  });
  return acc;
};



//
// function curriedSum(numArgs) {
//   let numbers = [];
//   function _curriedSum (number) {
//     numbers.push(number);
//     if (numbers.length === numArgs) {
//       let sum = 0;
//       numbers.forEach (el => {
//         sum += el;
//       });
//       return sum;
//     } else {
//       return sum;
//     }
//   }
//   return _curriedSum;
// }

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum (number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.arrSum();
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  let that = this;
  let numbers = [];
  function _curry () {
    let args = Array.from(arguments);
    numbers = numbers.concat(args);
    if (numbers.length === numArgs) {
      return that.apply(null, numbers);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
