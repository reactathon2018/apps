import React from 'react';
import LeaderBoard from '../components/LeaderBoard';
import ChatModel from '../../chatModel/ChatModel';
export default class LeaderBoardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.connect('wss://r1-contest-api.herokuapp.com', event => {
            this.update(JSON.parse(event.data));
        });
    }

    connect(uri, messageHandler, tries) {
        tries = tries || 0;
        var socket = new WebSocket(uri);
        socket.addEventListener('open', event => {
            tries = 0;
            console.log('Connected to wss!');
        });
        socket.addEventListener('message', messageHandler);
        socket.addEventListener('close', event => {
            tries < 8 && tries++;
            var delay = Math.floor((Math.random() + 0.5) * Math.pow(1.5, tries));
            console.log('Disconnected from socket. Reconnecting with random exponential backoff (' + delay + ' seconds)...');
            setTimeout(this.connect.bind(this, uri, messageHandler, tries), 1000 * delay);
        });
        return socket;
    }

    update(data) {
        this.setState({ data: data });
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
            <LeaderBoard title='Leaderboard' data={this.state.data} />
            <ChatModel/>
            </div>
        )
    }
}