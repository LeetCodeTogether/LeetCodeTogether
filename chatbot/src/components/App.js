import Chat from "./Chat";
import React, { Component } from 'react';

class App extends Component {
    render = () => {
        return(
            <div className="app">
                <header className="app-header">
                    Chatbot
                </header>
                <Chat />
            </div>
        )
    }
}

export default App;