import './Profile.css';
import LogoutIcon from './assets/logout.svg';

function Profile(props) {
  return (
    <div className='profile'>
      <div className='profile-content'>
        <div className='profile__image'>
          <span className='avatar'>{props.loginName[0].toUpperCase()}</span>
        </div>
        <div className='profile__description'>
          <h3 className='profile__name'>{props.loginName}</h3>
        </div>
      </div>
      <div className='profile__contorls'>
        <button
          className='btn btn-profile'
          onClick={() => props.handlerLogout()}
        >
          <img src={LogoutIcon} alt='' />
        </button>
      </div>
    </div>
  );
}

export default Profile;
