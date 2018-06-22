module.exports = function (app, db) {
  app.get('/api/articles', function (req, res) {
    db.Article.find({}).then(function (articles) {
      res.send(articles);
    });
  });

  app.post('/api/articles', function (req, res) {
    console.log('inside post of articles endpoint');
    console.log('REQUEST BODY: ' + req.body);
    console.log(req.body.title);
    db.Article.create(req.body).then(function (createdArticle) {
      console.log('inside success of Article.create');
      console.log('Created article title: ' + createdArticle.title);
      res.send(createdArticle);
    });
  });

  app.delete('/api/articles', function (req, res) {
    let articleId = req.params.articleId;
    
    db.Article.remove({ _id: articleId }, function(err) {
      if (!err) {
        res.sendStatus(204); // 204 Success with no content,
      } else {
        res.sendStatus(500);
      }
    });
  });
};