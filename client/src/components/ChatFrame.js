import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Card, Typography, Divider, Paper, TextField, Fab } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';


const styles = {
    chatFrame: {
        width: "16em",
        height: "25em",
        marginTop: "10px",
        position: "relative",
    },
    bottomMessageBar: {
        position: "absolute",
        bottom: "5px",
        left: "5px",
    }
}

const ChatFrame = () => {
    return (
        <div>
            <Paper style={styles.chatFrame}>
                <form noValidate autoComplete="off">
                    <div style={styles.bottomMessageBar}>
                        <TextField id="outlined-basic" label="Message..." variant="outlined" size="small"
                            onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                    // Do code here
                                    console.log(`Pressed keyCode ${ev.key}`);
                                    ev.preventDefault();
                                }
                            }} />
                        <Fab color="primary" aria-label="send" size="small" style={{ left: "4px", }}>
                            <SendIcon />
                        </Fab>

                    </div>
                </form>
            </Paper>
        </div>
    )
}
export default ChatFrame;