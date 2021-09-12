import React, { useState } from 'react';
import s from './sending.module.css';
import { faArrowCircleRight, faCheck, faMicrophone, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SendingTools(props) {
  const [message, setMessage] = useState('')
  const createMessage = (e) => {
        return setMessage(e)
  }
  const sendMessage = () => {
   alert()
  }
  return (
    <div className={s.tools}>
      <div className={s['add-message']}>
        <textarea
          className={s['add-comment-area']}
          placeholder="Введите сообщение"
          value={message}
          onChange={e => createMessage(e.target.value)}
        />
      </div>
      <div className={s['add-logo']}>
        <FontAwesomeIcon icon={faPaperclip} />
      </div>
      <div className={s['microphone-logo']} onClick={message.length !==0 ? sendMessage : null}>
        {message.length === 0 ?  <FontAwesomeIcon icon={faMicrophone}/>  :  <FontAwesomeIcon className={s.pointer} icon={faArrowCircleRight}/>}
      </div>
    </div>
  );
}

export default SendingTools;
