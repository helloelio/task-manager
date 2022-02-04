import '../Main.css';

const TaskItem = (props) => {
  return (
    <li key={props.id}>
      <div className='left-block'>
        <input type='checkbox' />
        <span>{props.task}</span>
      </div>
      <button>x</button>
    </li>
  );
};

export default TaskItem;
