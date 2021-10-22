import React from 'react';
import styles from './searchMessages.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchMessages from './SearchMessages';
import ProfileSwitch from './ProfileSwitch';
import HeaderUserInfo from './HeaderUserInfo';

function Header() {
  return (
    <div className={styles['messages-search-container']}>
      <SearchMessages />
      <div className={styles['search-logo']}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <HeaderUserInfo />
      <ProfileSwitch />
    </div>
  );
}

export default Header;
