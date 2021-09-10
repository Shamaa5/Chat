import React, { useEffect } from 'react';
import s from './searchMessages.module.css';
import { faCog, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeContactProfile,
  openContactProfile,
} from '../../../../redux/ducks/contacts';

function SearchMessages(props) {
  const contactProfile = useSelector(
    (state) => state.contacts.contactProfileIsOpen,
  );
  const dispatch = useDispatch();
  const closeProfile = () => {
    dispatch(closeContactProfile());
  };
  const openProfile = () => {
    dispatch(openContactProfile());
  };

  return (
    <div className={s['messages-search-container']}>
        <input
          type="search"
          maxLength={7}
          className={s['message-search-input']}
          placeholder='Search messages'
        />
        <div className={s['search-logo']}>
          <FontAwesomeIcon icon={faSearch} />
        </div>

      <div className={s['user-name']}>
        <h4>Name</h4>
        <div className={s.online} />
      </div>
      {contactProfile ? (
        <div className={s['settings-logo']}>
          <FontAwesomeIcon
            icon={faCog}
            onClick={closeProfile}
            className={s.button}
          />
        </div>
      ) : (
        <div className={s['settings-logo']}>
          <FontAwesomeIcon
            icon={faUser}
            onClick={openProfile}
            className={s.button}
          />
        </div>
      )}
    </div>
  );
}

export default SearchMessages;
