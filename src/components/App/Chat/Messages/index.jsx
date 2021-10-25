import React from 'react';
import styles from './message.module.css';
import { useSelector } from 'react-redux';
import MessagePreloader from './MessagePreloader';
import MessagesFilter from './MessagesFilter';
import PropTypes from 'prop-types';

function Messages(props) {
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
        return (
          <MessagesFilter
            message={message}
            myId={props.myId}
            key={message._id}
          />
        );
      })}
    </div>
  );
}
Messages.propTypes = {
  myId: PropTypes.string,
};
export default Messages;
