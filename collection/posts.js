Posts = new Meteor.Collection('posts');

Posts.allow({
  insert:function(userID, doc) {
    return !! userId;
  }
})
