import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
class Lobby extends React.Component {
    render = () => {
        return (
            <div className="lobby">
                <h1>This is a lobby!</h1>
                <Snackbar open="true" autoHideDuration={6000}>
                    <Alert severity="success">
                     Joined &lt;Some Lobby Name>!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default Lobby;