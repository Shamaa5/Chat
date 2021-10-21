import React from 'react';
import styles from './message.module.css';
import { useSelector } from 'react-redux';
import MessagePreloader from './MessagePreloader';
import MessagesFilter from './MessagesFilter';

function Message() {
  const loading = useSelector((state) => state.messages.loading);
  const messages = useSelector((state) => {
    let messages = state.messages.items;
    let filter = state.messages.filter;
    return messages.filter((message) => {
      return message.content.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
  });

  if (loading) {
    return <MessagePreloader messages={messages} />;
  }
  return (
    <div className={styles['message-container']} id="scroll_page">
      {messages.map((message) => {
        return <MessagesFilter message={message} key={message._id} />;
      })}
    </div>
  );
}

export default Message;
