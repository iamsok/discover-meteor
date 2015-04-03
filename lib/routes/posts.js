Router.map(function(){
  this.route('postList', {
    waitOn: function(){
      return Meteor.subscribe("posts");
    },
    path: '/',
    template: 'postsList',
    data: function(){
      return Posts.find()
    }
  })
})
