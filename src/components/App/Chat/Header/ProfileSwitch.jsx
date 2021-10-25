import React from 'react';
import {
  closeContactProfile,
  openContactProfile,
} from '../../../../redux/ducks/contacts';
import styles from './searchMessages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProfileSwitch() {
  const dispatch = useDispatch();

  const contactProfile = useSelector(
    (state) => state.contacts.contactProfileIsOpen,
  );

  const closeProfile = () => {
    dispatch(closeContactProfile());
  };
  const openProfile = () => {
    dispatch(openContactProfile());
  };

  if (contactProfile) {
    return (
      <div className={styles['settings-logo']}>
        <FontAwesomeIcon
          icon={faCog}
          onClick={closeProfile}
          className={styles.button}
        />
      </div>
    );
  }
  return (
    <div className={styles['settings-logo']}>
      <FontAwesomeIcon
        icon={faUser}
        onClick={openProfile}
        className={styles.button}
      />
    </div>
  );
}

export default ProfileSwitch;
