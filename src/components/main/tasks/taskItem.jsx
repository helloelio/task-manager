import '../Main.css';
import { useState } from 'react';

const TaskItem = (props) => {
  const [moreMenu, setMoreMenu] = useState(false);

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

  const activeMoreMenu = {
    background: moreMenu ? 'white' : '',
    color: moreMenu ? 'red' : '',
  };

  return (
    <li
      className='task-item'
      key={props.id}
      draggable={true}
      // onBlur={(e) => handlerBlurEnd(e)}
    >
      <div className='left-block' style={activeTaskItem}>
        <input type='checkbox' />
        <span>{props.task}</span>
      </div>
      <button
        className='btn btn-more'
        onClick={handlerMoreMenu}
        style={activeMoreMenu}
        title='Open task menu'
      >
        ···
      </button>
      <div className='relative'>
        {moreMenu ? (
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
        ) : (
          ''
        )}
      </div>
    </li>
  );
};

export default TaskItem;
