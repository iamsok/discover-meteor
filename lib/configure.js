// told the router to use the layout we just created as the default layout for all routes
Router.configure({
  layoutTemplate: "general",
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

//defined a new route called postsList and mapped it to the / path.
Router.map(function(){
  this.route('postsList', {path: '/'});
});
