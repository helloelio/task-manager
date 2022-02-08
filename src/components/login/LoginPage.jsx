import { useState } from 'react';
import './LoginPage.css';

export default function LoginPage(props) {
  const [login, setLogin] = useState('');

  const handlerKeyPresss = (e) => {
    if (e.key === 'Enter') {
      props.handlerLogin(e.target.value);
    }
  };

  return (
    <div className='login-page'>
      <div className='login-input'>
        <input
          type='text'
          id='login'
          onChange={(e) => setLogin(e.target.value)}
          onKeyPress={(e) => handlerKeyPresss(e)}
            autoFocus={true}
            maxLength='12'
        />
        <label id='login-label' htmlFor='login'>
          Enter your username:
        </label>
      </div>
      <button
        className='btn btn-login'
        onClick={() => props.handlerLogin(login)}
      >
        Login
      </button>
    </div>
  );
}
