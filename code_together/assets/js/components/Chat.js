import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import React, { Component } from 'react';
import { Socket } from 'phoenix';

class Chat extends Component {
    state = {
        name: "Bob",
        messages: [],
    }

    componentDidMount = () => {
        let socket = new Socket("/socket", {
            params: {token: window.userToken}
        });

        socket.connect();

        let channel = socket.channel("room:lobby", {});

        channel.join().receive("ok", response => {
            console.log("connected", response);
        });

        this.ws.onmessage = e => {
            const message = JSON.parse(e.data);
            this.addMessage(message);
        }

        this.ws.onclose = () => {
            console.log("disconnected");
            this.setState({
                ws: new WebSocket(URL)
            });
        }
    }

    addMessage = message => {
        this.setState(state => ({
            messages: [message, ...state.messages]
        }));
    }

    // here is where the message is sending, in the form of a string
    submitMessage = messageString => {
        const message = { name: this.state.name, message: messageString }
        this.ws.send(JSON.stringify(message));
        this.addMessage(message);
    }

    render = () => {
        return (
            <div className="chat">
                <label htmlFor="name">
                    Name: &nbsp;
                    <input
                        type="text"
                        id={'name'}
                        placeholder={'Enter your name...'}
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })} />
                </label>
                <ChatInput
                    ws={this.ws}
                    onSubmitMessage={messageString => {
                        this.submitMessage(messageString)
                    }
                    } />
                {this.state.messages.map((messages, index) =>
                    <ChatMessage
                        key={index}
                        message={messages.message}
                        name={messages.name}
                    />,
                )}
            </div>
        );
    }
}

export default Chat