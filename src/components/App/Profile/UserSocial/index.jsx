import React from 'react';
import s from './social.module.css';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function UserSocial(props) {
  if (props.contact.socials === undefined) {
    {
      return (
        <div className={s['social-container']}>
          <div className={s['social-title']}>
            <h3>Social</h3>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className={s['social-container']}>
        <div className={s['social-title']}>
          <h3>Social</h3>
        </div>
        <ul>
          <li className={props.contact.socials.instagram ? s.li : s.none}>
            <a href="#!">
              <FontAwesomeIcon icon={faInstagram} />{' '}
              <span>
                <i>{props.contact.socials.instagram}</i>
              </span>
            </a>
          </li>
          <li className={props.contact.socials.twitter ? s.li : s.none}>
            <FontAwesomeIcon icon={faTwitter} />{' '}
            <span>
              <i>
                <a href="#!">{props.contact.socials.twitter}</a>
              </i>
            </span>
          </li>
          <li className={props.contact.socials.facebook ? s.li : s.none}>
            <FontAwesomeIcon icon={faFacebook} />{' '}
            <span>
              <i>
                <a href="#!">{props.contact.socials.facebook}</a>
              </i>
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
