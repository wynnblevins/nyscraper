module.exports = function (app, cheerio, request) {
  app.get('/api/scraper', (req, res) => {
    request('https://www.nytimes.com/', 
      function(err, resp, html) {
      
      var headlines = [];

      if (!err){
        const $ = cheerio.load(html);
        var linksCount = 20;
        var links = $('h2.story-heading > a');
        
        for (var i = 0; i < linksCount; i++) {
          var headlineTxt = '';
          for (var j = 0; j < links[i].childNodes.length; j++) {
            // making sure data is not undefined
            if (links[i].children[j].data) {
              headlineTxt += links[i].children[j].data;
            }
          }
          
          let headline = null;
          if (headlineTxt) {
            headline = {
              title: headlineTxt
            };
          } 
          
          // logic to keep empty headlines out of app
          if (headline) {
            headlines.push(headline);
          }
        }

        res.send(headlines);
      }
      else {
        res.send(err);
      }
    });
  });
};