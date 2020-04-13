import React from "react";
import { Paper, TextField, Fab, Divider, Typography } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';


const ChatFrame = (props) => {
    const [messages, updateMessages] = React.useState([])
    const ws = props.ws;
    ws.onmessage = (evt) => {
        const message = JSON.parse(evt.data);
        updateMessages(messages.concat(message));
    }

    const ChatMessages = () => (
        messages.map(msg => (
            <Paper variant="outlined" style={props.styles.challenge}>
                {msg}
            </Paper>)));

    return (
        <Paper style={props.styles.frame}>
            <Typography variant="button" style={{ paddingLeft: "8px" }}>Chat</Typography>
            <Divider />
            <ChatMessages />
            <form style={props.styles.bottomBar} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Message..." variant="outlined" size="small"
                    style={{ maxWidth: "75%", }}
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