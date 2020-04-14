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

const styles = ((theme) => ({
    root: {
        marginTop: "30px",
        minHeight: "30em",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "93%",
        },
        [theme.breakpoints.up('md')]: {
            width: "80%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "80%",
        },
    },
}));

class Lobby extends React.Component {
    state = {
        open: false,
        loginMessage: "",
    }
    ws = new WebSocket("ws://" + window.location.hostname + ":3020");
    componentDidMount() {
        // console.log("ws://" + window.location.hostname + ":3020");
        this.ws.onopen = () => {
            this.setState({
                open: true,
                loginMessage: 'Connected to lobby!',
            })
        }
        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
              ws: new WebSocket("ws://localhost:3030"),
            })
          }
    };
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
                        <Divider style={{ marginBottom: '20px', }} />
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ChatFrame styles={LobbyStyles} user={this.props.user} ws={this.ws} />
                            </Grid>
                            <Grid item xs>
                                <ChallengeView styles={LobbyStyles} />
                            </Grid>
                            <Grid item xs>
                                <Leaderboard styles={LobbyStyles} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Snackbar open={this.state.open} autoHideDuration={4000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        {this.state.loginMessage}
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default withStyles(styles)(Lobby);