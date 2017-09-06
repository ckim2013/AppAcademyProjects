const FollowToggle = require('./follow_toggle.js');

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
