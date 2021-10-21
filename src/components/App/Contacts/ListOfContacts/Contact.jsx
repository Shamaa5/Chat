import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './contact.module.css';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <NavLink
      to={`/${props.contact._id}`}
      activeClassName={styles.activeContact}
    >
      <li>
        <div className={styles.contact}>
          <div className={styles.avatar}>
            {props.contact.fullname[0]}
            {props.contact.online && <div className={styles.online} />}
          </div>
          <div className={styles['contact-description']}>
            <div className={styles.name}>{props.contact.fullname}</div>
            <div className={styles['last-message']}>
              {props.contact.lastMessage?.content}
            </div>
          </div>
          <div className={styles['container-for-hover']}>
            <div className={styles.time}>
              {dayjs(props.contact.lastMessage?.time).format('HH:mm')}
            </div>
            <div className={styles.ellipsis}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>
        </div>
      </li>
    </NavLink>
  );
}

export default Contact;
Contact.propTypes = {
  contact: PropTypes.object,
  lastMessage: PropTypes.string,
  _id: PropTypes.string,
  fullname: PropTypes.string,
  time: PropTypes.string,
};
