import React from "react";
import LobbyScreen from "./LobbyScreen.js";
import Navigation from "./Navigation"
import useStyles from "./useStyles";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LobbyVideo from "./LobbyVideo.js";

const App = () => {
    return(
        <div className="app">
            <Navigation useStyles={useStyles} content={[
                {name: 'Dashboard', icon: < DashboardIcon />, path: < LobbyVideo /> }, 
                {name: 'Challenges', icon: < CodeIcon />, path: < LobbyScreen /> }, 
                {name: 'Friends', icon: <PeopleIcon/>, path: null },
                {name: 'Lobbies', icon: <MeetingRoomIcon/>, path: null }
                ]} />
        </div>
    );
    
}

export default App;