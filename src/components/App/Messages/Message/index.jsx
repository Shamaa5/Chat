import React from 'react';
import styles from './message.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessagePreloader from './MessagePreloader';
import OutGoingMessage from './OutGoingMessage';
import IncomingMessage from './IncomingMessage';
import SystemMessage from './SystemMessage';

function Message() {
  const loading = useSelector((state) => state.messages.loading);
  const messages = useSelector((state) => {
   let messages = state.messages.items;
   let filter = state.messages.filter;
   return messages
     .filter((message) => {
       return message.toUserId !== undefined
     })
     .filter((message) => {
       return message.content.toLowerCase().indexOf(filter.toLowerCase()) > -1 ;
     });
  });

  const params = useParams();

  if (loading) {
    return <MessagePreloader />;
  }
  return (
    <div className={styles['message-container']} id="scroll_page">
      {messages.map((message) => {
        if (message.type === 'text') {
          if (message.toUserId !== params.id) {
            return (
              <IncomingMessage message={message} key={message._id + '2'} />
            );
          }
          if (message.toUserId === params.id) {
            return (
              <OutGoingMessage message={message} key={message._id + '1'} />
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
