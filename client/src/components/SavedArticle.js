import React, { Component } from "react";
import { Button } from 'react-materialize';
import NoteDialog from './NoteDialog';

class SavedArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  onAddNoteClick = () => {
    console.log('inside add note method.');
  }

  onNoteDeleteClick = (articleid) => {
    fetch(`/api/articles/${articleid}`, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload();
    });
  }

  render = () => {
    return (
      <div className="scrapedHeadline">
        <h2>{this.props.name}</h2>
        
        <NoteDialog></NoteDialog>
        <Button variant="contained" color="secondary" onClick={() => {
          this.onNoteDeleteClick(this.props.articleid);
        }}>Remove</Button>
      </div>
    );
  }
}

export default SavedArticle;