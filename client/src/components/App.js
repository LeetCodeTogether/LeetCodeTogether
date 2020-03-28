import React from "react";
import LobbyScreen from "./LobbyScreen.js";
import Navigation from "./Navigation"
import useStyles from "./useStyles";

const App = () => {
    return(
        <div className="app">
            <Navigation useStyles={useStyles} content={[
                < LobbyScreen />,
                ]} />
        </div>
    );
    
}

export default App;