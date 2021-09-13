import React, { useEffect } from 'react';
import s from './message.module.css';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import MessagePreloader from './MessagePreloader';



// <FontAwesomeIcon icon={faHourglass} />
function Message(props) {
  const messages = useSelector((state) => state.messages.items);
  const loading = useSelector((state) => state.messages.loading);
  const contactName = useSelector(state => state.contacts.items.map(name => name.fullname))
  const params = useParams();

  if (loading) {
      return <MessagePreloader/>
  }
    return (
      <div className={s['message-container']} id='scroll_page'>
        {messages.map((message) => {
          if (message.toUserId !== undefined) {
            if (message.toUserId === params.id) {
              return (
                <div
                  className={s['sent-message']}
                  key={message._id + 'message'}
                >
                  <div>{message.content}</div>
                  <div className={s['message-info']}>
                    <div>
                      {dayjs(message.time).format('HH:mm')}
                      { (!message.read) ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faCheckDouble}/>}
                    </div>
                  </div>
                </div>
              );
            }
            if (message.toUserId !== params.id) {
              return (
                <div
                  className={s['incoming-message']}
                  key={message._id + 'message'}
                >
                  <div className={s.avatar}>К</div>
                  <div className={s['incoming-message-info']}>
                    <div>{message.content}</div>
                    <div className={s['message-info']}>
                      {dayjs(message.time).format('HH:mm')}
                    </div>
                  </div>
                </div>
              );
            }
          } else return null;
        })}
      </div>
    );

}

export default Message;
