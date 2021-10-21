import React from 'react';
import styles from './contact.module.css';
import { useSelector } from 'react-redux';
import Contact from './Contact';

function ListOfContacts() {
  const contacts = useSelector((state) => {
    let contacts = state.contacts.items;
    let filter = state.contacts.filter;
    return contacts.filter((contact) => {
      return contact.fullname.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
  });

  return (
    <div>
      <ul className={styles['contacts-container']}>
        {contacts.map((contact) => {
          return <Contact contact={contact} key={contact._id} />;
        })}
      </ul>
    </div>
  );
}

export default ListOfContacts;
