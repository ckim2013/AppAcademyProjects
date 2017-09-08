const DOMNodeCollection = require("./dom_node_collection");

window.$l = function $l(selector) {
  let funcs = [];
  if (typeof selector === "function") {
    funcs.push(selector);
    if (document.readyState === "complete") {
      funcs.forEach((el) => {
        el();
        funcs.shift();
      });
    }
  }


  let nodeListVar;
  let nodeListArr;

  if (selector instanceof HTMLElement) {
    nodeListArr = [selector];
    return new DOMNodeCollection(nodeListArr);
  } else {
    nodeListVar = document.querySelectorAll(selector);
    nodeListArr = Array.from(nodeListVar);
    return new DOMNodeCollection(nodeListArr);
  }


};
