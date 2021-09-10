import React, { useEffect } from 'react';
import s from './messages.module.css';
import Message from './Message';
import SearchMessages from './SearchMessages';
import SendingTools from './SendingTools';
import { useDispatch } from 'react-redux';
import { Route, useParams } from 'react-router-dom';
import { loadMessages } from '../../../redux/ducks/messages';

function Messages() {
  const dispatch = useDispatch()
  const params = useParams()

  // useEffect(()=> {
  //       if (params.id !== undefined) {
  //         dispatch(loadMessages(params.id))
  //       }
  // },[dispatch, params])

  if (!params.id) {
    return (
      <div>
        <h3>Выберите чат в списке слева</h3>
      </div>
    )}
  return (
      <div className={s['messages-container']}>
        <SearchMessages />
        <Message />
        <SendingTools />
      </div>

  );
}

export default Messages;
