import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
class Lobby extends React.Component {
    state = {
        open: true,
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({open: false})
    };
    render = () => {
        return (
            <div className="lobby">
                <h1>This is a lobby!</h1>
                <Snackbar open={this.state.open} autoHideDuration={4000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                     Joined &lt;Some Lobby Name>!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default Lobby;