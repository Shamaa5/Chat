import React from 'react';
import styles from './message.module.css';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCheckDouble,
  faHourglass,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../../../redux/ducks/messages';

function OutGoingMessage(props) {
  const dispatch = useDispatch();
  const id = props.message._id

  const handleDeleteMessage = (id) => {
    dispatch(deleteMessage(id));
  };
  return (
    <div className={styles['sent-message']} key={props.message._id + 'message'}>
      <div className={styles['message-content']}>{props.message.content}</div>
      <div className={styles['message-info']}>
        <div className={styles.time}>
          {dayjs(props.message.time).format('HH:mm')}
          {props.message.sending && (
            <FontAwesomeIcon
              icon={faHourglass}
              className={styles['message-icon']}
            />
          )}
          {props.message.read ? (
            <FontAwesomeIcon
              icon={faCheckDouble}
              className={styles['message-icon']}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCheck}
              className={styles['message-icon']}
            />
          )}
        </div>
      </div>
      <div
        className={styles['delete-message']}
        onClick={() => handleDeleteMessage(id)}
      >
        Х
      </div>
    </div>
  );
}

export default OutGoingMessage;

OutGoingMessage.propTypes = {
  message: PropTypes.object,
  _id: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
  read: PropTypes.bool,
  sending: PropTypes.bool,
};

// <FontAwesomeIcon icon={faCheckDouble}className={s['message-icon']} />
// <FontAwesomeIcon icon={faCheck} className={s['message-icon']}
//  <FontAwesomeIcon icon={faHourglass}
