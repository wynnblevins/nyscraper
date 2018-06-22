import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class NoteDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOkClick = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <span>
        <Button variant="contained" color="secondary" 
          onClick={this.handleClickOpen}>Add Note</Button>
        <Dialog open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Add Note:"}</DialogTitle>
          <DialogContent>
            <textarea id="noteTextArea"></textarea>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOkClick} color="primary">Ok</Button>
            <Button onClick={this.handleClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default NoteDialog;