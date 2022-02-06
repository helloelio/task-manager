export default function CreateButton(props) {
  return (
    <button
      onClick={() => props.modalOpen(`${props.name}`)}
      title='Click to add new Pocket section'
      className={props.name === 'TASK' ? 'btn btn-main' : 'btn'}
    >
      {props.text}
    </button>
  );
}
