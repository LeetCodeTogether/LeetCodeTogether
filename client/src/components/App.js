import React from "react";
import LobbyScreen from "./LobbyScreen.js";

class App extends React.Component {
    render = () => {
        return(
            <div className="app">
                <LobbyScreen />
                {/* TODO: Lobby Front Page*/}
            </div>
        );
    }
}

export default App;