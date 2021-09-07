import React from 'react';
import s from './profile.module.css';
import { faEnvelope, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserProfile(props) {
  return (
    <div className={s['profile-container']}>
      <div className={s.avatar}>Ц</div>
      <div className={s.username}>
        <h3>Цугаев Альви</h3>
        <p>@kuduzow</p>
      </div>
      <div className={s['types-of-call']}>
        <div className={s['types-of-call--logo call']}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className={s['types-of-call--logo video']}>
          <FontAwesomeIcon icon={faVideo} />
        </div>
        <div className={s['types-of-call--logo message']}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
