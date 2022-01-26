import { useState, useEffect } from 'react';
import PocketsItem from './PocketsItem';
import './Pockets.css';

function PocketsList(props) {
  const [pockets, setPockets] = useState([
    { id: 1, name: 'My Day', path: 'myday' },
    { id: 2, name: 'Important', path: 'important' },
    { id: 3, name: 'Planned', path: 'planned' },
    { id: 4, name: 'All', path: 'all' },
    { id: 5, name: 'Completed', path: 'completed' },
    { id: 6, name: 'Topic', path: 'topic' },
  ]);

  console.log(props);
  console.log(pockets);

  useEffect(() => {
    setPockets([...pockets, props.newItem]);
  }, [props.newItem]);

  return (
    <div>
      {pockets.map((pocket) => {
        return (
          <PocketsItem key={pocket.id} name={pocket.name} path={pocket.path} />
        );
      })}
    </div>
  );
}

export default PocketsList;
