import React from 'react';
import styles from './message.module.css';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

function IncomingMessage(props) {
  return (
    <div className={styles['incoming-message']} key={props.message._id + 'message'}>
      <div className={styles.avatar}>К</div>
      <div className={styles['incoming-message-info']}>
        <div className={styles['last-message']}>{props.message.content}</div>
        <div className={styles['message-info']}>
          {dayjs(props.message.time).format('HH:mm')}
        </div>
      </div>
    </div>
  );
}

IncomingMessage.propTypes = {
  message: PropTypes.object,
  _id: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
};

export default IncomingMessage;
