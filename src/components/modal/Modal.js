import './Modal.css';
import { useState } from 'react';

function Modal(props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      className='modal'
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.handlerNewItem(inputValue);
        }
      }}
    >
      <div className='modal-header'>
        <h3 className='modal-header__tutle'>Enter Your {props.title} name:</h3>
        <input
          autoFocus={true}
          className='modal-header__input'
          type='text'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className='modal-footer'>
        {props.error ? (
          <span className='error-message'>
            You need to enter {props.title} name!!
          </span>
        ) : (
          ''
        )}
        <div className='modal-buttons'>
          <button
            className='enter'
            onClick={() => props.handlerNewItem(inputValue)}
          >
            Add
          </button>
          <button className='close' onClick={() => props.handlerStatus(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;