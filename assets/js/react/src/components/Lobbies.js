import React from "react";
import Lobby from "./Lobby";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

// List of available lobbies
// TODO: Add a getter for list of lobbies
const lobbies = [
    <Lobby />,
];

class Lobbies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: this.listLobbies,
        }
    }

    listLobbies = (
        <>
            <h2><span>Available Lobbies</span></h2>
            {lobbies.map(lobby => (
                <ListItem button="true" onClick={() => this.setView(lobby)}>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Code Lobby"
                    />
                </ListItem>
            )
            )}
        </>
    )

    setView(view) {
        this.setState({
            view: (
                <>
                    <Button variant="outlined" onClick={() => this.setState({ view: this.listLobbies })} size="medium" startIcon={<KeyboardBackspaceIcon />}>
                        Back to All Lobbies
                        </Button>
                    {view}
                </>
            )
        })
    }


    render = () => {
        return (
            <div className="lobby-screen">
                {this.state.view}
            </div>
        );
    }
}

export default Lobbies;