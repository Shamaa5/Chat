import React from 'react';
import styles from './searchMessages.module.css';
import { faCog, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeContactProfile,
  openContactProfile,
} from '../../../../redux/ducks/contacts';
import { useParams } from 'react-router-dom';
import SearchMessages from './SearchMessages';
import ProfileSwitch from './ProfileSwitch';

function Header() {
  const dispatch = useDispatch();
  const params = useParams();
  const closeProfile = () => {
    dispatch(closeContactProfile());
  };
  const openProfile = () => {
    dispatch(openContactProfile());
  };
  const contact = useSelector((state) => state.contacts.items);
  const filteredContact = contact.filter((value) => value._id === params.id);
  const name = filteredContact.fullname;
  const online = filteredContact.map((online) => online.online);

  return (
    <div className={styles['messages-search-container']}>
      <SearchMessages />
      <div className={styles['search-logo']}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={styles['user-name']}>
        <h4>{name}</h4>
        <div className={online[0] ? styles.online : undefined} />
      </div>
      <div className={styles['settings-logo']}>
        <FontAwesomeIcon
          icon={faCog}
          onClick={closeProfile}
          className={styles.button}
        />
      </div>
    </div>
  );
}

export default Header;
