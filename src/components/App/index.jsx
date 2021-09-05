import React from 'react';
import s from './app.module.css';
import Contacts from './Contacts';
import Messages from './Messages';
import Profile from './Profile';

function App() {
  return (
    <div className={s.container}>
      <Contacts />
      <Messages />
      <Profile />
    </div>
  );
}

export default App;
