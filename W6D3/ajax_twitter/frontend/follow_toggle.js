const APIUtil = require('./api_util.js');

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
