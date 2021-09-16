import React from 'react';
import s from './contact.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  const contacts = useSelector((state) => state.contacts.items);
  const filteredContacts = useSelector(state => state.contacts.filteredContacts)
  const filtered = contacts.filter( contact => contact.fullname.indexOf(filteredContacts) > -1 )
  console.log(filteredContacts);
  return (
    <div>
      <ul className={s['contacts-container']}>
        {filtered.map((contact) => {
          return (
            <li key={contact._id + 'key'}>
              <Link to={`/${contact._id}`}>
                <div className={s.contact}>
                  <div className={s.avatar}>
                    {contact.fullname[0]}
                    {contact.online ? <div className={s.online} /> : null}
                  </div>
                  <div className={s['contact-description']}>
                    <div className={s.name}>{contact.fullname}</div>
                    <div className={s['last-message']}>
                      {contact.lastMessage?.content}
                    </div>
                  </div>
                  <div className={s['container-for-hover']}>
                    <div className={s.time}>
                      {dayjs(contact.lastMessage?.time).format('HH:mm')}
                    </div>
                    <div className={s.ellipsis}>
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                  </div>

                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contact;
