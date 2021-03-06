// told the router to use the layout we just created as the default layout for all routes
Router.configure({
  layoutTemplate: "layout",
  });

// defined a new route called postsList and mapped it to the / path.
Router.map(function(){
  this.route('postsList', {
    path: '/',
    waitOn: function(){
      return Meteor.subscribe('posts');
    },
    data: function(){
      return Posts.find()
    }
  });

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() {return Posts.findOne(this.params._id); }
  });

  this.route('postSubmit', {
    path:'/submit',
    template: 'postSubmit'
  });
});
