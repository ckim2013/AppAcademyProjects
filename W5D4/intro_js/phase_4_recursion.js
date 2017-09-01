// incorrect version, non dry version, gonzo version
function range1(start, end) {
  if (start === end) {
    return [start];
  }
  else if (start > end) {
    return [];
  }
  else {
    let ans = [start];
    range1(start + 1, end).myEach(function(el) {
      ans.push(el);
    });
    return ans;
  }
}
// correct version
function range2(start, end) {
  if (start === end) {
    return [];
  }

  let r = range2(start, end - 1);
  r.push(end - 1);
  return r;
}

function sumRec(arr) {

  if(arr.length === 0) {
    return 0;
  }

  return arr[0] + sumRec(arr.slice(1, arr.length + 1));

}


function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  }
  else {
    return 1/base * exponent(base, exp + 1);
  }
}


function fibonacci(nth) {
  if(nth === 1) {
    return [0];
  } else if (nth === 2) {
    return [0, 1];
  }

  let fibs = fibonacci(nth-1);
  fibs.push(fibs[fibs.length-2] + fibs[fibs.length-1]);
  return fibs;

}


function bsearch(array, target) {
  let mid_idx = Math.floor(array.length / 2);
  let mid_el = array[mid_idx];

  if (mid_el === target) {
    return mid_idx;
  }

  if (array.length === 0) {
    return undefined;
  }

  if (target < mid_el) {
    return bsearch(array.slice(0, mid_idx), target);
  } else {
    let index = bsearch(array.slice(mid_idx+1, array.length), target);
    if (index === undefined) {
      return undefined;
    } else {
      return index + mid_idx + 1;
    }
  }
}
