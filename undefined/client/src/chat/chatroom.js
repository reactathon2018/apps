import React from 'react';
import ReactDOM from 'react-dom';
import './chat.css';

import Message from './message';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Merlin",
                content: <p>Hello Gamers! Welcome</p>,
                img: require("./merlin.jpg"),
            }, {
                username: "Merlin",
                content: <p>I am your gaming assistant</p>,
                img: require("./merlin.jpg"),
            }, {
                username: "Haneef",
                content: <p>How many active games?</p>,
                img: require("./puppy.jpg"),
            }, {
                username: "Merlin",
                content: <p>Currently we have 5 active games. Reactaton, Codeathon, Tech Quiz, Bug Finder etc..</p>,
                img: require("./merlin.jpg"),
            }, {
                username: "Kishore",
                content: <p>How do i register for a game</p>,
                img: require("./kishore.jpg"),
            }, {
                username: "Merlin",
                content: <p>It's easy, you just have to apply. Which game would you like to participate.</p>,
                img: require("./merlin.jpg"),
            }, {
                username: "Kishore",
                content: <p>Reactathon</p>,
                img: require("./kishore.jpg"),
            }, {
                username: "Merlin",
                content: <p>Please <u>click</u> to apply</p>,
                img: require("./merlin.jpg"),
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Merlin",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "./puppy.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Merlin";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Gamify</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;