import './Modal.css';
import { useState } from 'react';

function Modal(props) {
  const [inputValue, setInputValue] = useState('');

  const handlerKeyPress = (key) => {
    if (key === 'Enter') {
      props.handlerNewItem(inputValue);
      console.log(key);
    } else if (key === 'Escape') {
      props.handlerStatus(false);
    }
  };

  return (
    <div className='modal' onKeyDown={(e) => handlerKeyPress(e.key)}>
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
            className='btn enter'
            onClick={() => props.handlerNewItem(inputValue)}
          >
            Add
          </button>
          <button
            className='btn close'
            onClick={() => props.handlerStatus(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
