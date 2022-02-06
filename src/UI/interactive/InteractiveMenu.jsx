export default function InteractiveMenu(props) {
  return (
    <div className='relative'>
      <div className='more-menu'>
        <span
          className='more-menu__controls'
          onClick={() => props.handlerDeleteTask(props.id)}
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
  );
}
