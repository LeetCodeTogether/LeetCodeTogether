import React from "react";
import { Paper, TextField, Fab } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';


const ChatFrame = (props) => {
    return (
        <div>
            <Paper style={props.styles.frame}>
                <form noValidate autoComplete="off">
                    <div style={props.styles.bottomBar}>
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