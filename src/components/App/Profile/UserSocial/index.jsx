import React from 'react';
import styles from './social.module.css';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function UserSocial(props) {
  if (props.contact.socials === undefined) {
    return (
      <div className={styles['social-container']}>
        <div className={styles['social-title']}>
          <h3>Social</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles['social-container']}>
        <div className={styles['social-title']}>
          <h3>Social</h3>
        </div>
        <ul>
          <li className={props.contact.socials.instagram && styles.li}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles['social-icons']}
            />
            <span>
              <i>{props.contact.socials.instagram}</i>
            </span>
          </li>
          <li className={props.contact.socials.twitter && styles.li}>
            <FontAwesomeIcon
              icon={faTwitter}
              className={styles['social-icons']}
            />
            <span>
              <i>{props.contact.socials.twitter}</i>
            </span>
          </li>
          <li className={props.contact.socials.facebook && styles.li}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={styles['social-icons']}
            />
            <span>
              <i>{props.contact.socials.facebook}</i>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
UserSocial.propTypes = {
  contact: PropTypes.object,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
};

export default UserSocial;
