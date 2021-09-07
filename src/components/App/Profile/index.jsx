import React from 'react';
import s from './profile.module.css';
import UserProfile from './UserProfile';
import UserMedia from './UserMedia';
import UserSocial from './UserSocial'


function Profile(props) {
  return (
    <div className={s['profile-container']}>
      <UserProfile />
      <UserSocial />
      <UserMedia/>
    </div>
  );
}

export default Profile;
