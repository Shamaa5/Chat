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
  if (!props.contact.socials) {
    return (
      <div className={styles['social-container']}>
        <div className={styles['social-title']}>
          <h3 className={styles.h3}>Social</h3>
          <div className={styles['no-socials']}>
            <p>Пользователь решил не указывать соцсети :(</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles['social-container']}>
      <div className={styles['social-title']}>
        <h3 className={styles.h3}>Social</h3>
      </div>
      <ul className={styles['list-of-socials']}>
        <li
          className={props.contact.socials.instagram ? styles.li : styles.none}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles['social-icons']}
          />
          <span>
            <i>{props.contact.socials.instagram}</i>
          </span>
        </li>
        <li className={props.contact.socials.twitter ? styles.li : styles.none}>
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles['social-icons']}
          />
          <span>
            <i>{props.contact.socials.twitter}</i>
          </span>
        </li>
        <li
          className={props.contact.socials.facebook ? styles.li : styles.none}
        >
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
UserSocial.propTypes = {
  contact: PropTypes.object,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
};

export default UserSocial;
