import './Main.css';
import TaskItem from './tasks/taskItem.js';
import Breadcrumbs from './breadcrumbs/BreadCrumbs';
import Background from './assets/pocket-bg.jpg';

function Main(props) {
  const bg = {
    background: `url('${Background}')`,
    height: '250px',
    width: '100%',
    position: 'absolute',
    top: '35px',
    left: '0',
    backgroundSize: '100%',
  };

  return (
    <main className='main' id='main'>
      <Breadcrumbs breadcrumbs={props.title} scrollToTop={props.scrollToTop} />
      <div className='pocket-bg' style={bg}></div>
      <h2 className='main__title'>{props.title}</h2>
      <ul>
        {props.tasks.map((task) => {
          return <TaskItem id={task.id} task={task.task} key={task.id} />;
        })}
      </ul>
      <button
        className='btn btn-main'
        onClick={() => props.modalOpen('TASK')}
        title='Click to add new task in current pocket'
      >
        +
      </button>
    </main>
  );
}

export default Main;
