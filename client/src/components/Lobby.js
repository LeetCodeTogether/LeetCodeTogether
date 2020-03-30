import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = {
    root: {
        marginTop: "40px",
        width: "80%",
        height: "80%",
        margin: "auto",
    },
}

class Lobby extends React.Component {
    state = {
        open: true,
    }
    handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false })
    };
    render = (props) => {
        const { classes } = this.props;
        return (
            <div className="lobby">
                <Card className={classes.root}>
                    <CardContent>
                        This
                    </CardContent>
                </Card>
                <Snackbar open={this.state.open} autoHideDuration={4000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Joined &lt;Some Lobby Name>!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default withStyles(styles)(Lobby);