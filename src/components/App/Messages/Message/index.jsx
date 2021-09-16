import React from 'react';
import s from './message.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessagePreloader from './MessagePreloader';
import OutGoingMessage from './OutGoingMessage';
import IncomingMessage from './IncomingMessage';
import SystemMessage from './SystemMessage';

function Message() {
  const messages = useSelector((state) => state.messages.items);
  const loading = useSelector((state) => state.messages.loading);
  const params = useParams();
  const filter = useSelector((state) => state.messages.filter);

  if (loading) {
    return <MessagePreloader />;
  }
  const filteredMessages = messages
    .filter((message) => {
      return message.toUserId !== undefined;
    })
    .filter((message) => {
      return (
        message.content.indexOf(filter) > -1 ||
        message.content.toLowerCase().indexOf(filter) > -1
      );
    });
  return (
    <div className={s['message-container']} id="scroll_page">
      {filteredMessages.map((message) => {
        if (message.type === 'text') {
          if (message.toUserId === params.id) {
            return (
              <OutGoingMessage message={message} key={message._id + '1'} />
            );
          }
          if (message.toUserId !== params.id) {
            return (
              <IncomingMessage message={message} key={message._id + '2'} />
            );
          }
        } else {
          return <SystemMessage message={message} key={message._id + '3'} />;
        }
        return null;
      })}
    </div>
  );
}

export default Message;
