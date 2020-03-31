import { Box, Button, ButtonGroup, Divider, Paper, Popover, Typography, Fab, TextField } from '@material-ui/core';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import React from 'react';
import SendIcon from '@material-ui/icons/Send';

const challenges = [
    { name: "Two sum", challenger: "Jerry", note: "I challenge you to do two sum in the next twenty minutes!", },
];
export default function ChallengeView(props) {
    return (
        <Paper style={props.styles.frame}>
            <Typography variant="button" style={{ paddingLeft: "8px" }}>Challenges</Typography>
            {challenges.map((challenge) => (
                <Paper variant="outlined" style={props.styles.challenge}>
                    {challenge.name}: {challenge.note}
                    <Divider />
                    Challenger: {challenge.challenger}
                    <br />
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" size="small">
                        <Button style={{ backgroundColor: "#5cb85c", fontSize: "0.8em", }}>Did it</Button>
                        <Button style={{ backgroundColor: "#d9534f", fontSize: "0.8em", }}>Hide</Button>
                    </ButtonGroup>
                </Paper>
            ))}
            <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                    <div>
                        <Button variant="contained" size="small" style={props.styles.bottomBar} color="primary" {...bindTrigger(popupState)}>
                            New Challenge
                        </Button>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Box p={2}>
                                <div>
                                    <TextField id="outlined-basic" label="Name..." variant="outlined" size="small"
                                        onKeyPress={(ev) => {
                                            if (ev.key === 'Enter') {
                                                // Do code here
                                                console.log(`Pressed keyCode ${ev.key}`);
                                                ev.preventDefault();
                                            }
                                        }} />
                                    <TextField id="outlined-basic" label="Challenge..." variant="outlined" size="small"
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
                            </Box>
                        </Popover>
                    </div>
                )}
            </PopupState>
        </Paper>
    )
}