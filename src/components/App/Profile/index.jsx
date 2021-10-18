import React from 'react';
import styles from './profile.module.css';
import UserProfile from './UserProfile';
import UserMedia from './UserMedia';
import UserSocial from './UserSocial';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

function Profile() {
  const openProfile = useSelector(
    (state) => state.contacts.contactProfileIsOpen,
  );
  const params = useParams();
  const contacts = useSelector((state) => state.contacts.items);
  const filteredContacts = contacts.filter(
    (contact) => contact._id === params.id,
  );
  if (!openProfile) {
    return null;
  }
  return (
       <div className={styles['profile-container']}>
        {filteredContacts.map((contact) => {
          return (
            <div key={contact.id + 'profile'}>
              <UserProfile contact={contact} />
              <UserSocial contact={contact} />
              <UserMedia contact={contact} />
            </div>
          );
        })}
      </div>
  );
}

export default Profile;
