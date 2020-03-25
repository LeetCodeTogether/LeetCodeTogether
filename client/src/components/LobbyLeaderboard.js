import LobbyUserPanel from "./LobbyUserPanel";
import React from "react";

class LobbyLeaderboard extends React.Component {
    render = () => {
        return(
            <div className="lobby-screen">
                <LobbyUserPanel />
                <LobbyUserPanel />
                <LobbyUserPanel />
                <LobbyUserPanel />
            </div>
        );
    }
}

export default LobbyLeaderboard;