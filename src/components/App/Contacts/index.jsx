import React from 'react';
import s from './contacts.module.css';
import Contact from './Contact';
import SearchContacts from './SearchContacts';

function Contacts() {

  return (
    <aside className={s.aside}>
      <SearchContacts />
      <Contact />
    </aside>
  );
}

export default Contacts;
