import React from 'react';
import styles from './search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {  setFilterContacts } from '../../../../redux/ducks/contacts';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchContacts() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleFindContact = (e) => {
    dispatch(setFilterContacts(e.target.value));
  };

  return (
    <div className={styles['search-container']}>
      <div className={styles['search-logo']}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="search"
        placeholder="Search contacts"
        className={styles.search}
        maxLength={7}
        value={filter}
        onChange={handleFindContact}
      />
    </div>
  );
}

export default SearchContacts;
