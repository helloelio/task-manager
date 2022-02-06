import '../Main.css';
import { useState } from 'react';
import DragIcon from './UI/DragIcon';

const TaskItem = (props) => {
  const [moreMenu, setMoreMenu] = useState(false);
  const [interactiveMenu, setInteractiveMenu] = useState(false);

  const handlerMoreMenu = () => {
    setMoreMenu(!moreMenu);
  };

  const handlerBlurEnd = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setMoreMenu(false);
    }
  };

  const activeTaskItem = {
    backgroundColor: moreMenu ? 'rgba(255, 255, 255, 0.3)' : '',
  };

  const hoveredTaskMenu = {
    backgroundColor: interactiveMenu ? 'rgba(255, 255, 255, 0.1)' : '',
  };

  const activeMoreMenu = {
    background: moreMenu ? 'white' : '',
    color: moreMenu ? 'red' : '',
  };

  return (
    <li
      className='task-item'
      style={activeTaskItem}
      key={props.id}
      draggable={true}
      onMouseEnter={() => setInteractiveMenu(true)}
      onMouseLeave={() => setInteractiveMenu(false)}
    >
      <div className='left-block' style={hoveredTaskMenu}>
        <span className='task-content'>
          <DragIcon active={interactiveMenu} />
          {props.task}
        </span>
      </div>
      <button
        className='btn btn-more'
        onClick={handlerMoreMenu}
        style={activeMoreMenu}
        title='Open task menu'
      >
        ···
      </button>
      {moreMenu ? (
        <div className='relative'>
          <div className='more-menu'>
            <span
              className='more-menu__controls'
              onClick={() => {
                props.handlerDeleteTask(props.id);
              }}
            >
              delete
            </span>
            <span
              className='more-menu__controls'
              onClick={() => console.log('edit', props.id)}
            >
              edit
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
    </li>
  );
};

export default TaskItem;
