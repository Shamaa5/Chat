import React, { useEffect } from 'react';
import s from './searchMessages.module.css';
import { faCog, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeContactProfile,
  openContactProfile,
} from '../../../../redux/ducks/contacts';
import { useParams } from 'react-router-dom';
import { findMessage } from '../../../../redux/ducks/messages';

function SearchMessages(props) {
  const contactProfile = useSelector(
    (state) => state.contacts.contactProfileIsOpen,
  );
  const dispatch = useDispatch();
  const params = useParams();
  const closeProfile = () => {
    dispatch(closeContactProfile());
  };
  const openProfile = () => {
    dispatch(openContactProfile());
  };
  const filter = useSelector((state) => state.messages.findMessage);
  const contact = useSelector((state) => state.contacts.items);
  const filteredContact = contact.filter((value) => value._id === params.id);
  const name = filteredContact.map((name) => name.fullname);
  const online = filteredContact.map((online) => online.online);

  const handleFindMessage = (e) => {
    dispatch(findMessage(e.target.value))
  }
  return (
    <div className={s['messages-search-container']}>
      <input
        type="search"
        maxLength={7}
        className={s['message-search-input']}
        placeholder="Search messages"
        value={filter}
        onChange={handleFindMessage}
      />
      <div className={s['search-logo']}>
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <div className={s['user-name']}>
        <h4>{name}</h4>
        <div className={online[0] ? s.online : s.none} />
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
