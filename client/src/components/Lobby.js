import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Card, Typography, Divider, Grid } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import ChatFrame from "./ChatFrame";
import ChallengeView from './ChallengeView.js'
import LobbyStyles from './LobbyStyles.js'
import Leaderboard from './Leaderboard.js'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = {
    root: {
        marginTop: "30px",
        width: "80%",
        height: "30em",
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
    render = () => {
        const { classes } = this.props;
        return (
            <div className="lobby">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="button" style={{ fontSize: "1.3rem", }}>Code Lobby</Typography>
                        <Divider />
                        <Grid container spacing={3}>
                            <Grid item>
                                <ChatFrame styles={LobbyStyles} />
                            </Grid>
                            <Grid item>
                                <ChallengeView styles={LobbyStyles} />
                            </Grid>
                            <Grid item>
                                <Leaderboard styles={LobbyStyles} />
                            </Grid>
                        </Grid>

                    </CardContent>
                    {/* <ChatFrame /> */}
                </Card>
                <Snackbar open={this.state.open} autoHideDuration={4000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Joined Code Lobby!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default withStyles(styles)(Lobby);