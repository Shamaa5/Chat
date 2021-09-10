import React from 'react';
import s from './contact.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Contact(props) {
  const contacts = useSelector(state => state.contacts.items)
  return (
    <div>
      <ul className={s['contacts-container']}>
        {contacts.map( contact => {
          return (
              <li key={contact._id + 'key'}>
                <Link to={`/${contact._id}`}>
                <div className={s.contact}>
                  <div className={s.avatar}>{contact.fullname[0]}{contact.online ? <div className={s.online}/> : null}</div>
                  <div className={s['contact-description']}>
                    <div className={s.name}>{contact.fullname}</div>
                    <div className={s['lust-message']}>last message</div>
                  </div>
                  <div className={s.time}>9:00</div>
                </div>
                </Link>
              </li>
          )
        })}

      </ul>
    </div>
  );
}

export default Contact;
