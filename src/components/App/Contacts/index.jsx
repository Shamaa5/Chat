import React from 'react';
import styles from './contacts.module.css';
import ListOfContacts from './ListOfContacts';
import SearchContacts from './SearchContacts';

function Contacts() {
  return (
    <aside className={styles.aside}>
      <SearchContacts />
      <ListOfContacts />
    </aside>
  );
}

export default Contacts;
