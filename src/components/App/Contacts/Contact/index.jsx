import React from 'react';
import s from './contact.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.fullname.indexOf(filter) > -1 ||
      contact.fullname.toLowerCase().indexOf(filter) > -1 ||
      contact.fullname.toUpperCase().indexOf(filter) > -1
    );
  });
  return (
    <div>
      <ul className={s['contacts-container']}>
        {filteredContacts.map((contact) => {
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
