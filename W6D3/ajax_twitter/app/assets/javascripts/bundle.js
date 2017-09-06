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

const followToggle = __webpack_require__(1);
const usersSearch = __webpack_require__(2);

$( () => {
  $(".follow-toggle").each(function(index, button) {
    new followToggle(button);
  });
});

$( () => {
  $(".users-search").each(function(index, user) {
    new usersSearch(user);
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(3);

class FollowToggle {
  constructor ($el) {
    this.$el = $($el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render () {
    if(this.followState === "unfollowed") {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow!");
    }
  }

  handleClick () {
    this.$el.on ("click", e => {
      e.preventDefault();

      if(this.followState === "followed"){
        APIUtil.unfollowUser(this.userId);
      } else {
        APIUtil.followUser(this.userId);
      }

      this.followState = (this.followState === "followed" ? "unfollowed" : "followed");
      this.render();
    });
  }

}



module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(3);

class usersSearch {
  constructor($el) {
    this.$el = $($el);
    this.input = $($($el).children()[0]);
    this.ul = $($($el).children()[1]);
    this.handleInput();
  }

  handleInput(){
    this.input.on ("input", e =>{
      APIUtil.searchUsers(this.input.val(), this.renderResults.bind(this));
    });
  }

  renderResults(users) {
    console.log(users);
    this.ul.empty();
    users.forEach((user) => {
      this.ul.append($(`<li>${user.username}</li>`));
    });
  }
}

module.exports = usersSearch;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);

const APIUtil = {
  followUser: id => {
    $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON',
      error: function(errMsg) {
        console.log(errMsg);
      }
    });
  },

  unfollowUser: id => {
    $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON',
      error: function(errMsg) {
        console.log(errMsg);
      }
    });
  },

  searchUsers: (queryVal,success) =>{
    $.ajax({
      method: 'GET',
      url: `/users/search/?query=${queryVal}`,
      dataType: 'JSON',
      success: (response) => success(response)
    });
  }
};

module.exports = APIUtil;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map