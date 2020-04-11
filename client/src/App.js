import React, { useEffect } from "react";
import Navigation from "./Navigation"
import useStyles from "./useStyles";
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';
import ForumIcon from '@material-ui/icons/Forum';
import Dashboard from "./Dashboard.js";
import Discussions from "./Discussions.js";
import Friends from "./Friends";
import Lobby from "./Lobby";

const App = () => {
    // User State Hook
    const [user, setUser] = React.useState({username: null});

    // Runs once when the component is rendered
    useEffect(() => {fetch('/')
        .then((response) => {
            setUser({username: response.headers.get("username")})
        })}, [0])

    return (
        <div className="app">
            <Navigation useStyles={useStyles} user={user} content={[
                { name: 'Dashboard', icon: < DashboardIcon />, path: < Dashboard /> },
                { name: 'Let\'s Code!', icon: < CodeIcon />, path: < Lobby /> },
                { name: 'Friends', icon: <PeopleIcon />, path: < Friends /> },
                { name: 'Discussions', icon: <ForumIcon />, path: < Discussions /> },
            ]} />
        </div>
    );
}

export default App;