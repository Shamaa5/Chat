import React from 'react';
import s from './message.module.css';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faHourglass } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../../../redux/ducks/messages';


function OutGoingMessage(props) {
  const dispatch = useDispatch()
  const handleDeleteMessage = () => {
    dispatch(deleteMessage(props.message._id))
  }
  return (
    <div className={s['sent-message']} key={props.message._id + 'message'}>
      <div className={s['message-content']}>{props.message.content}</div>
      <div className={s['message-info']}>
        <div className={s.time}>
          {dayjs(props.message.time).format('HH:mm')}
          {props.message.sending ? <FontAwesomeIcon icon={faHourglass} className={s['message-icon']}/> : null}
          {props.message.read ? <FontAwesomeIcon icon={faCheckDouble} className={s['message-icon']}/> : (
              <FontAwesomeIcon icon={faCheck} className={s['message-icon']}/>
            )
          }
        </div>
      </div>
      <div className={s['delete-message']} onClick={handleDeleteMessage}>Х</div>
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