const APIUtil = require('./api_util.js');

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
