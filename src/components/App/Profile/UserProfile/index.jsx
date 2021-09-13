import React from 'react';
import s from './profile.module.css';
import {
  faEnvelope,
  faPhone,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function UserProfile(props) {
  return (
    <div className={s['profile-container']}>
      <div className={s.avatar}>{props.contact.fullname[0]}</div>
      <div className={s.username}>
        <h3>{props.contact.fullname}</h3>
        <p>@{props.contact.username}</p>
      </div>
      <div className={s['types-of-call']}>
        <div className={s['types-of-call--logo call']}>
          <a href="#!">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>

        <div className={s['types-of-call--logo video']}>
          <a href="#!">
            <FontAwesomeIcon icon={faVideo} />
          </a>
        </div>
        <div className={s['types-of-call--logo message']}>
          <a href="#!">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}
UserProfile.propTypes = {
  contact: PropTypes.object,
  fullname: PropTypes.string,
  username: PropTypes.string
}

export default UserProfile;
