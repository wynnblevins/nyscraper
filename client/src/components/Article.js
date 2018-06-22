import React, { Component } from "react";
import { Button } from 'react-materialize';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSaveArticleClick = this.onSaveArticleClick.bind(this);
  }
  
  onSaveArticleClick(articleName) {
    fetch('/api/articles/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: articleName,
        notes: null
      })
    }).then(() => {
      console.log('inside success');
    });
  }
  
  render = () => {
    return (
      <div className="scrapedHeadline">
        <h2>{this.props.name}</h2>
        <Button onClick={() => {
          this.onSaveArticleClick(this.props.name);
        }} waves='light'>Save Article</Button>
      </div>
    );
  }
}

export default Article;