import React from "react";
import { Paper, TextField, Fab, Divider, Typography, Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';


const ChatFrame = (props) => {
    const [messages, updateMessages] = React.useState([]);
    const [chatField, updateChatField] = React.useState("");
    const ws = props.ws;
    ws.onmessage = (evt) => {
        const message = JSON.parse(evt.data);
        updateMessages(messages.concat(message));
    }
    const sendMessage = () => {
        ws.send(JSON.stringify({
            sender:  props.user.username,
            message: chatField,
        }))
        updateChatField('');
    }

    const ChatMessages = () => (
        messages.map(msg => (
            <Paper variant="outlined" style={props.styles.challenge}>
                {msg.sender}: <br /> {msg.message}
            </Paper>)));


    return (
        <Paper style={props.styles.frame}>
            <Typography variant="button" style={{ paddingLeft: "8px" }}>Chat</Typography>
            <Divider />
            <ChatMessages />
            <form style={props.styles.bottomBar} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Message..." variant="outlined" size="small"
                    style={{ maxWidth: "75%", }}
                    value={chatField}
                    onChange={e => updateChatField(e.target.value)}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            sendMessage();
                            ev.preventDefault();
                        }
                    }} />
                <Button style={{padding:'0',minWidth:'50px',}}onClick={() => sendMessage()} >
                    <Fab color="primary" aria-label="send" size="small" >
                        <SendIcon />
                    </Fab>
                </Button>
            </form>
        </Paper>
    )
}
export default ChatFrame;