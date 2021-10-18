import React, { useEffect } from 'react';
import styles from './messages.module.css';
import Message from './Message';
import SendingTools from './SendingTools';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMessages } from '../../../redux/ducks/messages';
import Header from './Header';

function Messages() {
  const dispatch = useDispatch();
  const params = useParams();
  const myId = '5f2ea3801f986a01cefc8bcd';

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadMessages(myId, params.id));
    }
  }, [dispatch, params, myId]);

  if (!params.id) {
    return (
      <div className={styles['choose-contact']}>
        <h3>Выберите чат в списке слева</h3>
      </div>
    );
  }

  return (
    <div className={styles['messages-container']}>
      <Header />
      <Message />
      <SendingTools />
    </div>
  );
}

export default Messages;
