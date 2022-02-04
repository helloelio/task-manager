import PocketsItem from './PocketsItem';
import './Pockets.css';

function PocketsList(props) {
  return (
    <div>
      {props.pockets.map((pocket) => {
        return (
          <PocketsItem
            key={pocket.id}
            name={pocket.name}
            path={pocket.path}
            handlerSetPocketName={props.handlerSetPocketName}
          />
        );
      })}
    </div>
  );
}

export default PocketsList;
