import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import NotFound from './components/404/NotFound';
import { useState, useEffect } from 'react';

function App() {
  const [routes, setRouter] = useState([]);
  const [modalType, setModalType] = useState('');
  const [pocketName, setPocketName] = useState('My day');
  const [modalState, setModalStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [itemToDelete, setItemTodelete] = useState(1);

  useEffect(() => {
    setRouter([
      {
        id: 1,
        path: 'tasks/myday',
        name: 'My day',
        tasks: [
          { id: 1, task: 'buy milk 1' },
          { id: 2, task: 'buy milk 2' },
          { id: 3, task: 'buy milk 3' },
          { id: 4, task: 'buy milk 4' },
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
  }, []);

  useEffect(() => {
    routes.map((route) => {
      if (route.name === pocketName) {
        const tasks = route.tasks.filter((t) => t.id !== itemToDelete);
        route.tasks = tasks;
        setRouter(routes);
      }
    });
  }, [itemToDelete]);

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

  const handlerSetPocketName = (newPocketName) => {
    setPocketName(newPocketName);
  };

  const handlerDeleteTask = (currentTuskId) => {
    setItemTodelete(currentTuskId);
  };

  const handlerScrollToTop = () => {
    document.getElementById('main').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
          routes.find((route) => {
            if (route.name === pocketName) {
              route.tasks.push({
                id: Math.floor(Math.random() * 100),
                task: item,
              });
            }
          });
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
    <div className='App' id='app'>
      <BrowserRouter>
        <Navigation
          handleSetRouter={handleSetRouter}
          modalOpen={modalOpen}
          pockets={routes}
          handlerSetPocketName={handlerSetPocketName}
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
                    scrollToTop={handlerScrollToTop}
                    handlerDeleteTask={handlerDeleteTask}
                  />
                }
              />
            );
          })}
          <Route
            path='/tasks/*'
            element={<NotFound title='This pocket is NOT FOUND' />}
          />
          <Route
            path='*'
            element={<NotFound title='Go to explore your tasks' />}
          />
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
