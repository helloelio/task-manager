import InteractiveMenu from './InteractiveMenu';

export default function InteractiveButton(props) {
  const activeMoreMenu = {
    background: props.moreMenu ? 'white' : '',
    color: props.moreMenu ? 'red' : '',
  };

  return (
    <div>
      <button
        className='btn btn-more'
        onClick={props.handlerMoreMenu}
        style={activeMoreMenu}
        title='Open task menu'
      >
        ···
      </button>
      {props.moreMenu ? (
        <InteractiveMenu
          handlerDeleteTask={props.handlerDeleteTask}
          id={props.id}
        />
      ) : (
        ''
      )}
    </div>
  );
}
