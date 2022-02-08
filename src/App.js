import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import NotFound from './components/404/NotFound';
import { useState, useEffect } from 'react';
import LoginPage from './components/login/LoginPage';

let items = [
  {
    id: 1,
    path: 'tasks/myday',
    name: 'My day',
    tasks: [],
  },
  {
    id: 2,
    path: 'tasks/important',
    name: 'Important',
    tasks: [],
  },
  {
    id: 3,
    path: 'tasks/planned',
    name: 'Planned',
    tasks: [],
  },
  { id: 4, name: 'All', path: 'tasks/all', tasks: [] },
  { id: 5, name: 'Completed', path: 'tasks/completed', tasks: [] },
  { id: 6, name: 'Topic', path: 'tasks/topic', tasks: [] },
];

function App() {
  const [login, setLogin] = useState('');
  const [routes, setRouter] = useState([]);
  const [modalType, setModalType] = useState('');
  const [pocketName, setPocketName] = useState('My day');
  const [modalState, setModalStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [itemToDelete, setItemTodelete] = useState(null);

  // for (const key in localStorage) {
  //   console.log(`${key}: ${login}`);
  // }

  // useEffect(() => {
  //   // get data
  //   if (isEmptyRoutes) {
  //     // setRouter(items);
  //     // handlerSetToLocalStorage(items);
  //     console.log('d')
  //   } else {
  //     console.log('c')

  //     setRouter(JSON.parse(localStorage.getItem(`${login}`)));
  //     setLogin(localStorage.getItem('login'));
  //   }
  // }, [login]);

  // useEffect(() => {
  //   items.map((route) => {
  //     if (route.name === pocketName) {
  //       const tasks = route.tasks.filter((t) => t.id !== itemToDelete);
  //       route.tasks = tasks;
  //     }
  //   });
  //   localStorage.setItem('name', JSON.stringify([...items]));
  // }, [itemToDelete]);

  // ПОФИКСИТЬ ГОВНА ЕБАННОГО


  const handlerLogin = (userLogin) => {
    setLogin(userLogin);
    localStorage.setItem('login', userLogin);

    const isEmptyRoutes = JSON.parse(localStorage.getItem(userLogin)) === null ? true : 
    JSON.parse(localStorage.getItem(userLogin)).length === 0 ? true : false;

    if (isEmptyRoutes) {
      setRouter(items);
      handlerSetToLocalStorage(userLogin, items);
    } else {
      setRouter(JSON.parse(localStorage.getItem(userLogin)));
      setLogin(localStorage.getItem('login'));
    }
  };


  const handlerLogout = () => {
    setLogin('');
  };

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
    setRouter([...routes, newPocket]);
    handlerSetToLocalStorage(login, [...routes, newPocket]);
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

  const handlerSetToLocalStorage = (name, value) => {
    console.log(value)
    localStorage.setItem(name, JSON.stringify(value));
  };

  const handlerNewItem = (item) => {
    if (item !== '' && item !== ' ') {
      switch (modalType) {
        case 'POCKET':
          // POST
          handleSetRouter({
            id: Math.floor(Math.random() * 100),
            path: `/tasks/${item}`,
            name: item,
            tasks: [],
          });
          handlerModalStatus(false);
          break;
        case 'TASK': {
          // POST
          routes.find((route) => {
            if (route.name === pocketName) {
              route.tasks.push({
                id: Math.floor(Math.random() * 100),
                task: item,
              });
            }
          });
          handlerSetToLocalStorage(login, routes);
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
      {login.length === 0 ? (
        <LoginPage handlerLogin={handlerLogin} />
      ) : (
        <BrowserRouter>
          <Navigation
            loginName={login}
            handlerLogout={handlerLogout}
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
            <Route path='*' element={<Navigate to='/tasks/myday' />} />
          </Routes>
        </BrowserRouter>
      )}
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
