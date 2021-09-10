import React, { useEffect } from 'react';
import s from './profile.module.css';
import UserProfile from './UserProfile';
import UserMedia from './UserMedia';
import UserSocial from './UserSocial';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profile(props) {
  const openProfile = useSelector(
    (state) => state.contacts.contactProfileIsOpen,
  );
  const params = useParams();
  // const dispatch = useDispatch();

  if (!openProfile) {
    return <div className={s.hide} />;
  }
  return (
      <div className={s['profile-container']}>
        <div>
          <UserProfile />
          <UserSocial />
          <UserMedia />
        </div>
      </div>
    );
  }

export default Profile;
