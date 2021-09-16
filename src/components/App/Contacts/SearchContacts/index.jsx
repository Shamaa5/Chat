import React from 'react';
import s from './search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { findContact } from '../../../../redux/ducks/contacts';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchContacts() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const handleFindContact = (e) => {
    dispatch(findContact(e.target.value));
  };


  return (
    <div className={s['search-container']}>
      <div className={s['search-logo']}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="Search contacts"
        className={s.search}
        maxLength={7}
        value={filter}
        onChange={handleFindContact}
      />
    </div>
  );
}

export default SearchContacts;
