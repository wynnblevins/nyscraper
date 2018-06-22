import React, { Component } from 'react';
import SavedArticle from './SavedArticle';

class SavedView extends Component {
  constructor() {
    super();
    this.state = {
      savedArticles: []
    }
  }
  
  componentDidMount = () => {
    fetch('/api/articles')
      .then(result=>result.json())
      .then(savedArticles=>this.setState({savedArticles}));
  }
  
  render() {
    return (
      <div>
        <div id="savedArticlesWrapper">
          {this.state.savedArticles.map((article, i) => (
            <SavedArticle key={i} name={article.title}></SavedArticle> 
          ))}
        </div>
      </div>
    );
  }
}

export default SavedView;