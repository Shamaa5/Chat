import React from 'react';
import s from './contact.module.css';

function Contact(props) {
  return (
    <div>
      <ul className={s['contacts-container']}>
        <li>
          <div className={s.contact}>
            <div className={s.avatar}>Ц</div>
            <div className={s['contact-description']}>
              <div className={s.name}>name</div>
              <div className={s['lust-message']}>last message</div>
            </div>
            <div className={s.time}>9:00</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
