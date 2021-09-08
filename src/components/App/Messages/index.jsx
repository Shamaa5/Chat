import React from 'react';
import s from './messages.module.css';
import Message from './Message';
import SearchMessages from './SearchMessages';
import SendingTools from './SendingTools';
import { useDispatch } from 'react-redux';

function Messages() {
  const dispatch = useDispatch()
  return (
    <div className={s['messages-container']}>
      <SearchMessages />
      <Message />
      <SendingTools />
    </div>
  );
}

export default Messages;
