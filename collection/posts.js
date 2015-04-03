Posts = new Mongo.Collection('posts');

PostsSchema = new SimpleSchema({
  title: {
    type: String,
    max: 100
  },
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url
  }
});

Posts.attachSchema(PostsSchema);
