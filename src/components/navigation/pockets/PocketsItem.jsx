import { NavLink } from 'react-router-dom';
import './Pockets.css';

function PocketsItem(props) {
  return (
    <NavLink
      to={props.path}
      className='pockets-item'
      onClick={() => props.handlerSetPocketName(props.name)}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? '#ffffff40' : '',
        };
      }}
    >
      {props.name}
    </NavLink>
  );
}

export default PocketsItem;
