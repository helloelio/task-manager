import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import { useState, useEffect } from 'react';

function App() {
  const [routes, setRouter] = useState([
    {
      id: 1,
      path: 'tasks/myday',
      name: 'My day',
      tasks: [
        { id: 1, task: 'buy milk' },
        { id: 2, task: 'buy milk' },
        { id: 3, task: 'buy milk' },
        { id: 4, task: 'buy milk' },
      ],
    },
    {
      id: 2,
      path: 'tasks/important',
      name: 'Important',
      tasks: [
        { id: 1, task: 'buy q' },
        { id: 2, task: 'buy w' },
        { id: 3, task: 'buy e' },
        { id: 4, task: 'buy r' },
      ],
    },
    {
      id: 3,
      path: 'tasks/planned',
      name: 'Planned',
      tasks: [
        { id: 1, task: 'buy a' },
        { id: 2, task: 'buy b' },
        { id: 3, task: 'buy c' },
        { id: 4, task: 'buy d' },
      ],
    },
    { id: 4, name: 'All', path: 'tasks/all', tasks: [] },
    { id: 5, name: 'Completed', path: 'tasks/completed', tasks: [] },
    { id: 6, name: 'Topic', path: 'tasks/topic', tasks: [] },
  ]);

  const [modalType, setModalType] = useState('');
  const [modalState, setModalStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const modalOpen = (type) => {
    setErrorMessage(false);
    setModalType(type);
    setModalStatus(true);
  };

  const handlerModalStatus = (status) => {
    setModalStatus(status);
    setErrorMessage(false);
  };

  const handleSetRouter = (newPocket) => {
    setRouter((prevState) => [...prevState, newPocket]);
  };

  const handlerNewItem = (item) => {
    if (item !== '' && item !== ' ') {
      switch (modalType) {
        case 'POCKET':
          handleSetRouter({
            id: Math.floor(Math.random() * 100),
            path: `/tasks/${item}`,
            name: item,
            tasks: [],
          });
          handlerModalStatus(false);
          break;
        case 'TASK': {
          console.log(item);
          handlerModalStatus(false);
          break;
        }
        default:
          return;
      }
    } else {
      setErrorMessage(true);
    }
  };
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation
          handleSetRouter={handleSetRouter}
          modalOpen={modalOpen}
          pockets={routes}
        />
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.id}
                element={
                  <Main
                    tasks={route.tasks}
                    title={route.name}
                    modalOpen={modalOpen}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
      {modalState && modalType === 'POCKET' ? (
        <Modal
          error={errorMessage}
          title='Pocket'
          handlerStatus={handlerModalStatus}
          handlerNewItem={handlerNewItem}
        />
      ) : modalState && modalType === 'TASK' ? (
        <Modal
          error={errorMessage}
          title='Task'
          handlerStatus={handlerModalStatus}
          handlerNewItem={handlerNewItem}
        />
      ) : (
        false
      )}
    </div>
  );
}

export default App;
