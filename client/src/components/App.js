import React from "react";
import Navigation from "./Navigation"
import useStyles from "./useStyles";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';
import ForumIcon from '@material-ui/icons/Forum';
import Dashboard from "./Dashboard.js";
import Discussions from "./Discussions.js";
import Friends from "./Friends";
import Lobbies from "./Lobbies";

const App = () => {
    return(
        <div className="app">
            <Navigation useStyles={useStyles} content={[
                {name: 'Dashboard', icon: < DashboardIcon />, path: < Dashboard /> }, 
                {name: 'Let\'s Code!', icon: < CodeIcon />, path: < Lobbies /> }, 
                {name: 'Friends', icon: <PeopleIcon/>, path: < Friends /> },
                {name: 'Discussions', icon: <ForumIcon/>, path: < Discussions /> },
                ]} />
        </div>
    );
    
}

export default App;