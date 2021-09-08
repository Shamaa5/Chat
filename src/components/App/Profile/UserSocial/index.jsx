import React from 'react';
import s from './social.module.css';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserMedia() {
  return (
    <div className={s['social-container']}>
      <div className={s['social-title']}>
        <h3>Social</h3>
      </div>
      <ul>
        <li>
          <a href="#!">
            <FontAwesomeIcon icon={faInstagram} />{' '}
            <span>
              <i>Kuduzow</i>
            </span>
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />{' '}
          <span>
            <i>
              <a href="#!">Kuduzow</a>
            </i>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} />{' '}
          <span>
            <i>
              <a href="#!">Kuduzow</a>
            </i>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserMedia;
