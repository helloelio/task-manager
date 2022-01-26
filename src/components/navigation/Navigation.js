import './Navigation.css';
import Profile from './profile/Profile';
import Search from './search/Search';
import PocketsList from './pockets/PocketsList';
import Modal from './modal/Modal';
import { useState } from 'react';

function Navigation() {
  const [modalState, setModalStatus] = useState(false);
  const [item, setItem] = useState({ id: 10, name: 'test', path: 'test' });
  const [errorMessage, setErrorMessage] = useState(false);

  const handlerStatus = (status) => {
    setErrorMessage(false);
    setModalStatus(status);
  };

  const handlerNewItem = (name) => {
    if (name !== '' && name !== ' ') {
      setItem({ id: Math.floor(Math.random() * 100), name: name, path: name });
      setErrorMessage(false);
      handlerStatus(false);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <nav className='navigation'>
      <header className='header'>
        <Profile />
        <Search />
      </header>
      <section className='pockets-list'>
        <PocketsList newItem={item} />
      </section>
      <footer>
        <button onClick={() => handlerStatus(true)} className='btn'>
          + Add new pocket
        </button>
      </footer>
      {modalState ? (
        <Modal
          handlerStatus={handlerStatus}
          handlerNewItem={handlerNewItem}
          error={errorMessage}
        />
      ) : (
        false
      )}
    </nav>
  );
}
export default Navigation;
