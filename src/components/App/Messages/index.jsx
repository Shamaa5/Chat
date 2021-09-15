import React, { useEffect } from 'react';
import s from './messages.module.css';
import Message from './Message';
import SearchMessages from './SearchMessages';
import SendingTools from './SendingTools';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMessages } from '../../../redux/ducks/messages';

function Messages() {
  const dispatch = useDispatch();
  const params = useParams();
  const myId = '5f2ea3801f986a01cefc8bcd';

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadMessages(myId, params.id));
    }
  }, [dispatch, params.id, myId]);

  if (!params.id) {
    return (
      <div className={s['choose-contact']}>
        <h3>Выберите чат в списке слева</h3>
      </div>
    );
  }

  return (
    <div className={s['messages-container']}>
      <SearchMessages />
      <Message />
      <SendingTools />
    </div>
  );
}

export default Messages;
