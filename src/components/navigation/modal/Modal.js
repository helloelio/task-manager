import './Modal.css';
import { useState } from 'react';

function Modal(props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='modal'>
      <div className='modal-header'>
        <h3>Enter Your pocket name:</h3>
        <input type='text' onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div className='modal-footer'>
        {props.error ? (
          <span className='error-message'>You need to enter pocket name!!</span>
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
