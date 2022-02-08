import './Main.css';
import TaskItem from './tasks/TaskItem';
import Breadcrumbs from './breadcrumbs/BreadCrumbs';
import Background from './assets/pocket-bg.jpg';
import CreateButton from '../../UI/CreateButton.jsx';
import PocketImage from '../../UI/PocketImage';

function Main(props) {
  return (
    <main className='main' id='main'>
      <Breadcrumbs breadcrumbs={props.title} scrollToTop={props.scrollToTop} handlerOpenNavMenu={props.handlerOpenNavMenu}/>
      <PocketImage image={Background} />
      <h2 className='main__title'>{props.title}</h2>
      <ul>
        {props.tasks.map((task) => {
          return (
            <TaskItem
              id={task.id}
              task={task.task}
              key={task.id}
              handlerDeleteTask={props.handlerDeleteTask}
            />
          );
        })}
      </ul>
      <CreateButton name='TASK' text='+' modalOpen={props.modalOpen} />
    </main>
  );
}

export default Main;
