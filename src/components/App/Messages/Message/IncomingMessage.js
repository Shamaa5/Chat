import React from 'react';
import s from './message.module.css';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

function IncomingMessage(props) {
  return (
    <div
      className={s['incoming-message']}
      key={props.message._id + 'message'}
    >
      <div className={s.avatar}>К</div>
      <div className={s['incoming-message-info']}>
        <div>{props.message.content}</div>
        <div className={s['message-info']}>
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
  time: PropTypes.string
}

export default IncomingMessage;