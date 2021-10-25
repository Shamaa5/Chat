import React, { useState } from 'react';
import styles from './sending.module.css';
import {
  faArrowCircleRight,
  faMicrophone,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { newMessageSend } from '../../../../redux/ducks/messages';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function SendingTools(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const createMessage = (e) => {
    setMessage(e.target.value);
  };
  const id = useParams().id;

  const sendMessage = () => {
    dispatch(newMessageSend(message, id, props.myId));
    setMessage('');
  };

  return (
    <div className={styles.tools}>
      <div className={styles['add-message']}>
        <textarea
          className={styles['add-comment-area']}
          placeholder="Введите сообщение"
          value={message}
          onChange={createMessage}
        />
      </div>
      <div className={styles['add-logo']}>
        <FontAwesomeIcon icon={faPaperclip} />
      </div>
      <div
        className={styles['microphone-logo']}
        onClick={message.length !== 0 ? sendMessage : undefined}
      >
        {message.length === 0 ? (
          <FontAwesomeIcon icon={faMicrophone} />
        ) : (
          <FontAwesomeIcon
            className={styles.pointer}
            icon={faArrowCircleRight}
          />
        )}
      </div>
    </div>
  );
}
SendingTools.propTypes = {
  myId: PropTypes.string,
};
export default SendingTools;
