import LobbyLeaderboard from "./LobbyLeaderboard";
import LobbyPersonalScoreboard from "./LobbyPersonalScoreboard";
import LobbyVideo from "./LobbyVideo";
import React from "react";

class LobbyScreen extends React.Component {
    render = () => {
        return(
            <div className="lobby-screen">
                <LobbyLeaderboard />
                <LobbyPersonalScoreboard />
                <LobbyVideo />
            </div>
        );
    }
}

export default LobbyScreen;