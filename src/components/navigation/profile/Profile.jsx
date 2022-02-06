import './Profile.css';
import { useState } from 'react';

function Profile() {
  const [name, setName] = useState('helloelio');
  return (
    <div className='profile'>
      <div className='profile-content'>
        <div className='profile__image'>
          <span className='avatar'>{name[0].toUpperCase()}</span>
        </div>
        <div className='profile__description'>
          <h3 className='profile__name'>{name}</h3>
        </div>
      </div>
      <div className='profile__contorls'>
        <button className='btn btn-profile'> {'<'} </button>
      </div>
    </div>
  );
}

export default Profile;
