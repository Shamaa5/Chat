import React, { useState } from 'react';
import s from './sending.module.css';
import {
  faArrowCircleRight,
  faCheck,
  faMicrophone,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { newMessageSend } from '../../../../redux/ducks/messages';
import { useParams } from 'react-router-dom';

function SendingTools(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const createMessage = (e) => {
    setMessage(e.target.value);
  };
  const myId = '5f2ea3801f986a01cefc8bcd';
  const id = useParams().id;
  const sendMessage = () => {
    dispatch(newMessageSend(message, id, myId));
    setMessage('');
  };
  return (
    <div className={s.tools}>
      <div className={s['add-message']}>
        <textarea
          className={s['add-comment-area']}
          placeholder="Введите сообщение"
          value={message}
          onChange={createMessage}
        />
      </div>
      <div className={s['add-logo']}>
        <FontAwesomeIcon icon={faPaperclip} />
      </div>
      <div
        className={s['microphone-logo']}
        onClick={message.length !== 0 ? sendMessage : null}
      >
        {message.length === 0 ? (
          <FontAwesomeIcon icon={faMicrophone} />
        ) : (
          <FontAwesomeIcon className={s.pointer} icon={faArrowCircleRight} />
        )}
      </div>
    </div>
  );
}

export default SendingTools;
