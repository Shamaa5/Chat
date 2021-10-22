import React from 'react';
import styles from './searchMessages.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MessagePreloader from '../Message/MessagePreloader';

function HeaderUserInfo() {
  const params = useParams();
  const contact = useSelector((state) =>
    state.contacts.items.filter((item) => {
      return item._id === params.id;
    }),
  );

  if (!contact) {
    return <MessagePreloader />;
  }
  return (
    <div className={styles['user-name']}>
      <h4>{contact[0]?.fullname}</h4>
      <div className={contact[0]?.online ? styles.online : undefined} />
    </div>
  );
}

export default HeaderUserInfo;
