import React from 'react';
import Message form './Message';

const MessageList = ({messages}) => {
  return (
    <div>
      {props.messages.map(message => (<Message key=messages.id message={message}/>))}
    </div>
  )
}

export default MessageList
