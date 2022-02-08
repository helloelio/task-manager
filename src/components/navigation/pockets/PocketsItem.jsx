import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Pockets.css';

function PocketsItem(props) {
  const [moreMenu, setMoreMenu] = useState(false);

  const handlerMoreMenu = (e) => {
    e.preventDefault();
    setMoreMenu(true);
  };

  const handlerOnBlur = () => {
    setMoreMenu(false);
  };


  return (
    <NavLink
      to={props.path}
      className='pockets-item'
      onClick={() => {
        props.handlerSetPocketName(props.name);
        props.handlerOpenNavMenu();
        }}
      onBlur={handlerOnBlur}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? '#ffffff40' : '',
        };
      }}
      onContextMenu={(e) => {
        handlerMoreMenu(e);
      }}
    >
      {props.name}
      {moreMenu ? (
        <div className='relative'>
          <div className='more-menu nav-more-menu'>
            <span
              className='more-menu__controls'
              onClick={() => console.log(props.id)}
            >
              delete
            </span>
            <span
              className='more-menu__controls'
              onClick={() => console.log(props.id)}
            >
              edit
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
    </NavLink>
  );
}

export default PocketsItem;
