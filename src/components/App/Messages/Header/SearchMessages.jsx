import React from 'react';
import styles from './searchMessages.module.css';
import { SetFilterMessage } from '../../../../redux/ducks/messages';
import { useDispatch, useSelector } from 'react-redux';

function SearchMessages() {
  const dispatch = useDispatch();
  const handleFindMessage = (e) => {
    dispatch(SetFilterMessage(e.target.value));
  };
  const filter = useSelector((state) => state.messages.filter);
  return (
    <input
      type="search"
      maxLength={7}
      className={styles['message-search-input']}
      placeholder="Search messages"
      value={filter}
      onChange={handleFindMessage}
    />
  );
}

export default SearchMessages;
