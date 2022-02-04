import './Profile.css';
import { useState } from 'react';

function Profile() {
  const [name, setName] = useState('Player');
  return (
    <div className='profile'>
      <div className='profile__image'>
        <span className='avatar'>{name[0].toUpperCase()}</span>
      </div>
      <div className='profile__description'>
        <h3 className='profile__name'>{name}</h3>
        <p>example@mail.com</p>
      </div>
    </div>
  );
}

export default Profile;
