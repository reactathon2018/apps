const models = {
    PostModel: {
      findByAuthor(authorId, context){
        context.mysql.raw(
          'SELECT * FROM posts WHERE authorId = ?',
          authorId,
        );
      },
      getViews(postId){
        return context.mongo.collection('views').find({postId});
      },
      // ...
    }
  };  