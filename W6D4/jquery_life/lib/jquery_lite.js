/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    if (string === undefined) {
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach((el) => {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(args) {
    if (args instanceof Array) {
      args.forEach((arg) => {
        this.htmlElements.forEach((el) => {
          if (arg instanceof HTMLElement) {
            el.innerHTML += arg.outerHTML;
          } else {
            el.innerHTML += arg;
          }
        });
      });
    } else {
      this.htmlElements.forEach((el) => {
        console.log('in the loop');
        if (args instanceof HTMLElement) {
          el.innerHTML += args.outerHTML;
        } else {
          el.innerHTML += args;
        }
      });
    }
  }

  attr(name, value) {
    this.htmlElements.forEach((el) => {
      el.setAttribute(name, value);
    });
  }

  addClass(className) {
    this.htmlElements.forEach((el) => {
      el.className = className;
    });
  }

  removeClass() {
    this.addClass("");
  }

  children() {
    let result = [];
    this.htmlElements.forEach((el) => {
      result = result.concat(Array.from(el.children));
    });
    return new DOMNodeCollection(result);
  }

  parents() {
    let result = [];
    this.htmlElements.forEach((el) => {
      result.push(el.parentElement);
    });
    return new DOMNodeCollection(result);
  }

  find(selector){
    let result = [];
    let query;
    this.htmlElements.forEach((el) => {
      query = el.querySelectorAll(selector);
      if (query) {
        result = result.concat(Array.from(query));
      }
    });
    return new DOMNodeCollection(result);
  }

  remove() {
    this.empty();
    // Might need to change...
    this.htmlElements = [];
  }

  on (command, callback) {
    this.htmlElements.forEach((el) => {
      el.addEventListener(command, callback);
      el.callback = callback;
    });
  }

  off (command) {
    this.htmlElements.forEach((el) => {
      console.log(el.callback);
      el.removeEventListener(command, el.callback);
    });
  }
}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);