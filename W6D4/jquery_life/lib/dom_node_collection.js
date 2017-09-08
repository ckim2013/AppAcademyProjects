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
