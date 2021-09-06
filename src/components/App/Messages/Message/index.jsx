import React from 'react';
import s from './message.module.css';
function Message(props) {
  return (
    <div className={s['message-container']}>
      <div className={s['sent-message']}>
        <div>message</div>
        <div className={s['message-info']}>
          <div>9:00 <span>✓</span></div>
        </div>

      </div>
      <div className={s['incoming-message']}>
        <div className={s.avatar}>Ц</div>
        <div className={s['incoming-message-info']}>
          <div>message</div>
          <div className={s['message-info']}>9:00</div>
        </div>
      </div>
      <div className={s['missing-call']}>
        <h3>Пропущенный вызов</h3>
      </div>
    </div>
  );
}

export default Message;
