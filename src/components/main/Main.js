import './Main.css';
import TaskItem from './tasks/taskItem.js';

function Main(props) {
  return (
    <main className='main'>
      <h2>{props.title}</h2>
      <ul>
        {props.tasks.map((task) => {
          return <TaskItem id={task.id} task={task.task} key={task.id} />;
        })}
      </ul>
      <button className='btn btn-main' onClick={() => props.modalOpen('TASK')}>
        +
      </button>
    </main>
  );
}

export default Main;
