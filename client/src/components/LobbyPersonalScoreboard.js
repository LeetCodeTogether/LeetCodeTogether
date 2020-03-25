import IndividualPersonalScoreboard from "./IndividualPersonalScoreboard";
import React from "react";

class LobbyPersonalScoreboard extends React.Component {
    render = () => {
        return (
            <div className="personal-scoreboard">
                <IndividualPersonalScoreboard />
            </div>
        )
    }
}

export default LobbyPersonalScoreboard;