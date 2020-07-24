import React from 'react';
import ChatBubble from 'react-chat-bubble';

const botImageUrl = "/jabc/robot.png";
const studentImageUrl = "https://image.flaticon.com/icons/png/512/201/201818.png";

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        "type": 1,
        "image": botImageUrl,
        "text": "Hello! Good Morning!"
      }, {
        "type": 0,
        "image": studentImageUrl,
        "text": "Hi"
      }, {
        "type": 1,
        "image": botImageUrl,
        "text": "Hello! Good Morning!"
      }, {
        "type": 1,
        "image": botImageUrl,
        "text": "Hello! Good Morning!"
      }]
    };
  }
  render() {
    let { messages } = this.state;

    return (

      <div style={{ width: '80vw', overflow: 'scroll', fontSize: '2em'}}>
        <ChatBubble messages={messages} onNewMessage={(msg) => {
          messages.push({
            "type": 0,
            "image": studentImageUrl,
            "text": msg
          })
          this.setState({messages});
        }} />
      </div>
    )
  }
}
export default ChatScreen;