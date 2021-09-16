import React from 'react';
import s from './message.module.css';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
// <FontAwesomeIcon icon={faHourglass} />

function OutGoingMessage(props) {
  return (
    <div className={s['sent-message']} key={props.message._id + 'message'}>
      <div>{props.message.content}</div>
      <div className={s['message-info']}>
        <div className={s.time}>
          {dayjs(props.message.time).format('HH:mm')}
          {!props.message.read ? (
            <FontAwesomeIcon icon={faCheck} className={s['message-icon']} />
          ) : (
            <FontAwesomeIcon
              icon={faCheckDouble}
              className={s['message-icon']}
            />
          )}
        </div>
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
};
