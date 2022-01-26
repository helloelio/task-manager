import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Pockets.css';

function PocketsItem(props) {
  return (
    <Router>
      <Link to={props.path} className='pockets-item'>
        {props.name}
      </Link>
    </Router>
  );
}
export default PocketsItem;
