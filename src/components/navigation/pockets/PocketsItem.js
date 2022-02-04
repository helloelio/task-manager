import { Link } from 'react-router-dom';
import './Pockets.css';

function PocketsItem(props) {
  return (
    <Link to={props.path} className='pockets-item'>
      {props.name}
    </Link>
  );
}

export default PocketsItem;
