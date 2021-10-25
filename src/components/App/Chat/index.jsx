import React, { useEffect } from 'react';
import styles from './messages.module.css';
import Messages from './Messages';
import SendingTools from './SendingTools';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMessages } from '../../../redux/ducks/messages';
import Header from './Header';

function Chat() {
  const dispatch = useDispatch();

  const id = useParams().id;

  const myId = useSelector((state) => state.application.profile._id);

  useEffect(() => {
    if (id) {
      dispatch(loadMessages(myId, id));
    }
  }, [dispatch, id, myId]);

  if (!id) {
    return (
      <div className={styles['choose-contact']}>
        <h3>Выберите чат в списке слева</h3>
      </div>
    );
  }
  return (
    <div className={styles['messages-container']}>
      <Header />
      <Messages myId={myId} />
      <SendingTools myId={myId} />
    </div>
  );
}

export default Chat;
