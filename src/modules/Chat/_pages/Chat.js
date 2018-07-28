import React from 'react';
import {connect} from 'react-redux';

import {getSocketId, messageChanged, sendNewMessage} from '../_store/ChatActions';

class Chat extends React.Component {
    componentDidMount() {
        this.props.getSocketId();
    }

    render() {
        return (
            <div>
                <p>This is the chat screen ooo</p>
                <input onChange={event => this.props.messageChanged(event.target.value)} />
                <button onClick={() => this.props.sendNewMessage(this.props.message_to_send)}>Send message</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {message_to_send} = state.chat;
    return {message_to_send};
};

export default connect(mapStateToProps, {getSocketId, messageChanged, sendNewMessage})(Chat);
