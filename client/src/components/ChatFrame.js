import React from "react";
import { Paper, TextField, Fab, Divider, Typography, Container } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';


const ChatFrame = (props) => {
    return (
        <Paper style={props.styles.frame}>
            <Typography variant="button" style={{ paddingLeft: "8px" }}>Chat</Typography>
            <Divider />
            <Paper variant="outlined" style={props.styles.challenge}>
                Chat text here...
            </Paper>
            <form style={props.styles.bottomBar} noValidate autoComplete="off">
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
            </form>
        </Paper>
    )
}
export default ChatFrame;