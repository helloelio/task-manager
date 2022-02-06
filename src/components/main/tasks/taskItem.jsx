import '../Main.css';
import { useState } from 'react';
import DragIcon from '../../../UI/DragIcon';
import InteractiveButton from '../../../UI/interactive/InteractiveButton';

const TaskItem = (props) => {
  const [moreMenu, setMoreMenu] = useState(false);
  const [interactiveMenu, setInteractiveMenu] = useState(false);

  const handlerMoreMenu = () => {
    setMoreMenu(!moreMenu);
  };

  const activeTaskItem = {
    backgroundColor: moreMenu ? 'rgba(255, 255, 255, 0.3)' : '',
  };

  const hoveredTaskMenu = {
    backgroundColor: interactiveMenu ? 'rgba(255, 255, 255, 0.1)' : '',
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
          <input
            className='task-value'
            type='text'
            value={props.task}
            autoFocus={true}
            disabled={true}
          />
        </span>
      </div>
      <InteractiveButton
        handlerMoreMenu={handlerMoreMenu}
        handlerDeleteTask={props.handlerDeleteTask}
        moreMenu={moreMenu}
        id={props.id}
      />
    </li>
  );
};

export default TaskItem;
