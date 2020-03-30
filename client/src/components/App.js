import React from "react";
import axios from "axios";
import Navigation from "./Navigation"
import useStyles from "./useStyles";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Dashboard from "./Dashboard.js";
import Challenges from "./Challenges.js";
import Friends from "./Friends";
import Lobbies from "./Lobbies";

class App extends React.Component {
    returnStats = async () => {
        let result = await axios.get();
        console.log(result);
        return result;
    }   

    render = () => {
        this.returnStats();
        return (
            <div className="app" >
                {/* <Navigation /> */}
                {/* <Navigation useStyles={useStyles} content={[
                    { name: 'Dashboard', icon: < DashboardIcon />, path: < Dashboard /> },
                    { name: 'Challenges', icon: < CodeIcon />, path: < Challenges /> },
                    { name: 'Friends', icon: <PeopleIcon />, path: < Friends /> },
                    { name: 'Lobbies', icon: <MeetingRoomIcon />, path: < Lobbies /> },
                ]} /> */}
            </div>
        );
    }
}

export default App;