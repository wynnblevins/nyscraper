module.exports = function (app, db) {
  app.get('/api/articles/:articleId/note', function (req, res) {
    db.Article.findOne({_id: req.params.articleId})
      .populate('notes')
      .then(function (note) {
      res.send(note);
    });
  });

  app.post('/api/articles/:articleId/note', function (req, res) {
    db.Note.create(req.body).then(function (dbNote) {
      
      db.Article.findOneAndUpdate(
        { _id: req.params.articleId }, 
        { $set: {notes: dbNote._id }}, 
        { new: false }
      ).then(function (doc, err) {
        if (!err) {
          res.sendStatus(200)
        }
      });
    })
  });
};